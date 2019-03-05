import axios from 'axios'

export default {
  createJob: function() {
    return axios.post('/api/jobinfo/')
  },
  findJobs: function() {
    return axios.get('/api/jobinfo/findjobs')
  },
  updateJob: function() {
    return axios.update('api/jobinfo/:id')
  },
  deleteJob: function() {
    return axios.delete('/api/jobinfo/:id')
  } 
}