const express = require("express");
var router = express.Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../../../models/userModel");
const auth = require("../../../middleware/auths")
//Display User Details
router.get("/", auth,async (req, res) => {
  const UserType = "User";
  await userModel
    .find({ userType: UserType })
    .then((UserManagement) => {
      if (UserManagement) {
        console.log("UserManagement");
        res.json(UserManagement);
      } else {
        res.json({ UserManagement: null });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

//Display user details by using ID
router.route("/display/:id").get(auth,async (req, res) => {
  const _id = req.params.id;

  await UserManagement.findById(_id, (err, UserManagement) => {
    console.log(UserManagement);
    return res.status(200).json({
      success: true,
      UserManagement,
    });
  }).catch((err) => {
    console.log(err);
  });
});

//Update user by using ID
router.route("/updates/:id").put(auth,async (req, res) => {
  const _id = req.params.id;
  var FirstName = req.body.FirstName;
  var LastName = req.body.LastName;
  var Email = req.body.Email;
  var Contact = req.body.Contact;
  var Role = req.body.Role;

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
