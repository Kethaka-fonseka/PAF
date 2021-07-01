const express = require("express");
var router = express.Router();
const User = require("../../models/userModel");
const bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

//Register
router.post("/", async (req, res) => {
  try {
    const { Email, UserName, password, passwordVerify } = req.body;

    const userType = "User";
    //Validations
    if (!Email || !userType || !UserName || !password || !passwordVerify)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields" });

    if (password.length < 6)
      return res
        .status(400)
        .json({
          errorMessage: "Please enter a password of at least 6 characters",
        });

    if (password !== passwordVerify)
      return res
        .status(400)
        .json({ errorMessage: "Please enter the same password twice" });

    const existingUser = await User.findOne({ Email });

    if (existingUser)
      return res
        .status(400)
        .json({ errorMessage: "already exists an account with this email" });

    //to Hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    //Save user accounts to the DB

    const newUser = new User({
      Email,
      UserName,
      userType,
      passwordHash,
    });

    const saveUser = await newUser.save();
    res.status(200).send();

  } catch (err) {
    res.status(500).send();
  }
});

router.post("/login", async (req, res) => {
  try {
    const { Email, password } = req.body;

    //Validate
    if (!Email || !password) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields" });
    }

    const existingUser = await User.findOne({ Email });
    if (!existingUser) {
      return res.status(401).json({ errorMessage: "Worng email or password" });
    }
    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect) {
      return res.status(401).json({ errorMessage: "Worng email or password" });
    }

   


    const token = jwt.sign({
      user: existingUser._id
    }, process.env.JWT_SECRET);

    res.cookie("token", token, {
      httpOnly: true,
    }).send({
       users: existingUser,
      });

  } catch (err) {
    console.log(err);
  }
});

router.get("/logout", async (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send(true);
});


module.exports = router;
