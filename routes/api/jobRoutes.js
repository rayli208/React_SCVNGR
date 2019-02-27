const router = require("express").Router();
const jobController = require('../../controllers/jobController');

router 
  .route('/')
    .post(jobController.createJob);

router
  .route('/findjobs')
    .get(jobController.getAllJobs);

router
  .route('/:id')
    .put(jobController.updateJob)
    .delete(jobController.deleteJob)

module.exports = router;
  