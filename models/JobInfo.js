// Initiate mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JobInfoSchema = new Schema({

  company: {
    type: String,
    required: true,
  },
  job_title: {
    type: String,
    required: true
  },
  phone_number: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    required: false,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  link: {
    type: String,
    required: false
  },
  salary: {
    type: Number,
    required: false
  },
  location: {
    type: String,
    required: false,
    default: ""
  },
  info: {
    type: String,
    required: false,
    default: ""
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  positionId: {
    type: Number,
    required: true,
    default: 1,
    min: 1,
    max: 3
  }

});

const JobInfo = mongoose.model('JobInfo', JobInfoSchema);

module.exports = JobInfo;