const express = require("express");
var router = express.Router();
let path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../../../models/userModel");
const auth = require("../../../middleware/auths")
//Display user details by using ID
router.route("/:id").get(auth,async (req, res) => {
  const _id = req.params.id;

  await userModel
    .findById(_id, (err, UserManagement) => {
      return res.status(200).json({
        success: true,
        UserManagement,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
//Delete User from the system
router.route("/delete/:id").delete(auth,(req, res) => {
  const _id = req.params.id;
  userModel
    .findByIdAndDelete(_id)
    .then((result) => {
      res.json({
        status: "Success",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
