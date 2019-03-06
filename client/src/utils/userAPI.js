import axios from 'axios';

export default {
  login: function() {
    return axios.post('/api/user/login')
  },
  register: function() {
    return axios.post('/api/user/register')
  },
  findUser: function() {
    return axios.get('/api/user/:id')
  },
  deleteUser: function() {
    return axios.delete('/api/user/:id')
  }
}