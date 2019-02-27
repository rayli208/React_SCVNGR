const db = require('../models');

module.exports = {

  getAllJobs: function(req, res) {
    db.JobInfo.find({})
      .then(jobInfoDB => res.json(jobInfoDB))
      .catch(err => console.log(err));
  },

  createJob: function(req, res) {
    db.JobInfo.create(req.body)
      .then(JobInfoDB => console.log(JobInfoDB))
      .catch(err => console.log(err));
  },

  deleteJob: function(req, res) {
    db.JobInfo.deleteOne({_id: req.params.id})
      .then(JobInfoDB => console.log(JobInfoDB))
      .catch(err => console.log(err));
  },

  updateJob: function(req, res) {
    const updatedJobInfo = {};

    if(req.body.positionId) {
        updatedJobInfo.positionId = req.body.positionId
    }

    if(req.body.info) {
      updatedJobInfo.info = req.body.info
    }

    

    db.JobInfo.findOneAndUpdate({_id: req.params.id}, {$set: updatedJobInfo}, {new:true})
      .then(JobInfoDB => console.log(JobInfoDB))
      .catch(err => console.log(err));
  }

}