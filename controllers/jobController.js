const db = require('../models');

module.exports = {

  getAllJobs: function(req, res) {
    console.log('server hit')
    db.JobInfo.find({})
      .then(jobInfoDB => res.json(jobInfoDB))
      .catch(err => console.log(err));
  },

  createJob: function(req, res) {
    console.log('created job')
    db.JobInfo.create(req.body)
      .then(JobInfoDB => res.json(JobInfoDB))
      .catch(err => console.log(err));
  },

  deleteJob: function(req, res) {
    db.JobInfo.deleteOne({_id: req.params.id})
      .then(JobInfoDB => res.json(JobInfoDB))
      .catch(err => console.log(err));
  },

  updateJob: function(req, res) {
    const updatedJobInfo = {};

    // job_title
    // phone_number
    // email
    // location
    // salary
    // link

    if(req.body.job_title) {
      updatedJobInfo.job_title = req.body.job_title
    }
    if(req.body.phone_number) {
      updatedJobInfo.phone_number = req.body.phone_number
    }
    if(req.body.email) {
      updatedJobInfo.email = req.body.email
    }
    if(req.body.location) {
      updatedJobInfo.location = req.body.location
    }
    if(req.body.salary) {
      updatedJobInfo.salary = req.body.salary
    }
    if(req.body.link) {
      updatedJobInfo.link = req.body.link
    }
    if(req.body.info) {
      updatedJobInfo.info = req.body.info
    }
    if(req.body.positionId) {
        updatedJobInfo.positionId = req.body.positionId
    }

    db.JobInfo.findOneAndUpdate({_id: req.params.id}, {$set: updatedJobInfo}, {new:true})
      .then(JobInfoDB => console.log(JobInfoDB))
      .catch(err => console.log(err));
  }

}