import axios from 'axios'

export default {
  createJob: function(userJobInput) {
    return axios.post('/api/jobinfo', userJobInput)
  },
  findJobs: function() {
    return axios.get('/api/jobinfo/findjobs')
  },
  updateJob: function(jobId, updateJobInfo) {
    return axios.put(`api/jobinfo/${jobId}`, updateJobInfo)
  },
  deleteJob: function(jobId) {
    return axios.delete(`/api/jobinfo/${jobId}`)
  } 
}