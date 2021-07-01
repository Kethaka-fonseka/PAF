const express = require("express");
var router = express.Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserManagement = require("../../../models/UserManagementModel");
const userModel = require("../../../models/userModel");
const auth = require("../../../middleware/auths")

//Save inserted photo in the folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //save location
    cb(null, "../Frontend/public/user");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

//filter photo type
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

router.route("/").post(upload.single("Identity"), async (req, res) => {
  var FirstName = req.body.FirstName;
  var LastName = req.body.LastName;
  var Email = req.body.Email;
  var Contact = req.body.Contact;
  var Role = req.body.Role;
  var Password = req.body.Password;
  var Identity = req.file.filename;
  var userType = Role;

  //Validation
  if (!FirstName || !LastName || !Email || !Contact || !Password || !Identity)
    return res
      .status(400)
      .json({ errorMessage: "Please enter all required fields" });

  //Hash the password
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(Password, salt);

  const UserManage = new UserManagement({
    FirstName,
    LastName,
    Email,
    Contact,
    Role,
    passwordHash,
    Identity,
  });
  const UserName = FirstName + LastName;

  await UserManage.save()
    .then(() => {
      const newUser = new userModel({
        Email,
        UserName,
        userType,
        passwordHash,
      });
      const saveUser = newUser.save();
      const token = jwt.sign(
        {
          user: saveUser._id,
        },
        process.env.JWT_SECRET
      );

      res.cookie("token", token, {
        httpOnly: true,
      });
      res.json({ status: "Add a new user to the system" });
    })
    .catch((err) => {
      console.log(err);
    });
});
//Display all users details
router.get("/display",auth, async (req, res) => {
  await UserManagement.find()
    .then((UserManagement) => {
      if (UserManagement) {
        res.json(UserManagement);
      } else {
        res.json({ UserManagement: "no data" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
//display details by using ID
router.route("/display/:id").get(auth,async (req, res) => {
  const _id = req.params.id;

  await UserManagement.findById(_id, (err, UserManagement) => {
    return res.status(200).json({
      success: true,
      UserManagement,
    });
  }).catch((err) => {
    console.log(err);
  });
});
//Update user details
router.route("/updates/:id").put(auth,async (req, res) => {
  const _id = req.params.id;

  var FirstName = req.body.FirstName;
  var LastName = req.body.LastName;
  var Email = req.body.Email;
  var Contact = req.body.Contact;
  var Role = req.body.Role;

  //Validation
  if (!FirstName || !LastName || !Email || !Contact || !Role)
    return res
      .status(400)
      .json({ errorMessage: "Please enter all required fields" });

  const data = {
    FirstName,
    LastName,
    Email,
    Contact,
    Role,
  };

  const update = UserManagement.findByIdAndUpdate(_id, data)
    .then(() => {
      res.status(200).send({ status: "updated", user: update });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Update Error" });
    });
});
module.exports = router;
