const express = require("express");
const router = express.Router();



const usermanagement = require("../routes/UserManagement/Staff/usermanagement");
router.use("/usermanagement", usermanagement);

const DeleteUsers = require("../routes/UserManagement/Staff/DeleteUsers");
router.use("/deletemanageusers", DeleteUsers);

const Contact = require("../routes/UserManagement/Staff/Contact");
router.use("/viewmore", Contact);

const UsersDetails = require("../routes/UserManagement/User/usermanagement");
router.use("/usermanage", UsersDetails);

const DeleteUsersDetails = require("../routes/UserManagement/User/DeleteUsers");
router.use("/deleteusers", DeleteUsersDetails);

const ContactUsers = require("../routes/UserManagement/User/Contact");
router.use("/contactusers", ContactUsers);

const Payment = require("../routes/Payment/Payment");
router.use("/bill", Payment);

const TemplateRoute = require("../routes/Template/TemplateRoute");
router.use("/template", TemplateRoute);

//IT19171234===========================================================

const Submission=require("../api/submission.api");
router.use("/submissions",Submission);


// IT19053592======================================================================

const Conference=require("../api/conference.api");
router.use("/conferences",Conference);

const Schedule=require("../api/schedule.api");
router.use("/schedules",Schedule);

const Speakers =require("../api/speakers.api");
router.use("/speakers",Speakers);



//=====================================================================================
module.exports = router;
