const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  subject: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  status: {
    type: String,
    trim: true,
    required: true,
  },
  date: {
    type: Date,
    require: true,
  },
  role: {
    type: String,
    trim: true,
    required: true,
  },
  file: {
    type: String,
    trim: true,
    required: true,
  },
  conference:{
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'conference'
  },
  user:{
    type:String,
    trim: true,
    required: false,
  }
});

module.exports = mongoose.model("submission", submissionSchema);
