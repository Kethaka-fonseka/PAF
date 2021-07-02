const multer = require("multer");
const Submission = require("../models/submission.model");
const STATUS = "pending";
const datatime = new Date();
const Declined = "declined";
const Approved = "approved";
const Unpaid = "unpaid";
const Researcher = "researcher";

const createSubmission = async (req, res) => {
  if (req.body) {
    const submission = new Submission({
      subject: req.body.subject,
      description: req.body.description,
      status: STATUS,
      date: datatime,
      role: req.body.role,
      file: req.file.originalname,
      conference:req.body.conference,
      user: req.body.user
    });
    try {
      const newSubmission = await submission.save();
      res.status(201).json(newSubmission);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};

const getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({ status: "pending" });
    res.status(200).json(submissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUserSubmissions = async (req, res) => {
  if (req.params.name) {
    try {
      const submissions = await Submission.find({user:req.params.name});
      res.status(200).json(submissions);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

const getSubmissionByID = async (req, res) => {
  if (req.params.id) {
    try {
      const submission = await Submission.findById(req.params.id);
      res.status(200).json(submission);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

const DowloadTheFile = async (req, res) => {
  if (req.params.id) {
    try {
      const submission = await Submission.findById(req.params.id);
      const location = "C:\\Users\\ASUS\\Desktop\\Back\\ICAF\\submissions\\" + submission.file;
      res.download(location);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

const ApproveSubmission = async (req, res) => {
  if (req.params.id) {
    try {
      const submission = await Submission.findById(req.params.id);
      if (submission.role == Researcher) {
        submission.status = Unpaid;
      } else {
        submission.status = Approved;
      }
      const approvedSubmission = await submission.save();
      res.status(200).json(approvedSubmission);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

const DeclineSubmission = async (req, res) => {
  if (req.params.id) {
    try {
      const submission = await Submission.findById(req.params.id);
      submission.status = Declined;
      const approvedSubmission = await submission.save();
      res.status(200).json(approvedSubmission);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

const PaidStatusHandler = async (req, res) => {
  if (req.params.id) {
    try {
      const submission = await Submission.findById(req.params.id);
      submission.status = Approved;
      const approvedSubmission = await submission.save();
      res.status(200).json(approvedSubmission);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};


const getApprovedSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({ status: Approved });
    res.status(200).json(submissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};





module.exports = {
  createSubmission,
  getSubmissions,
  getSubmissionByID,
  DowloadTheFile,
  ApproveSubmission,
  DeclineSubmission,
  getUserSubmissions,
  PaidStatusHandler,
  getApprovedSubmissions

};
