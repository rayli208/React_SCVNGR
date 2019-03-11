import axios from 'axios';

export default {
  login: function(loginInfo) {
    return axios.post('/api/user/login', loginInfo)
  },
  loginCheck: function() {
    return axios.get('/api/user/login')
  },
  register: function(userInfo) {
    return axios.post('/api/user/register', userInfo)
  },
  logout: function() {
    return axios.get('/api/user/logout')
  },
  findUser: function() {
    return axios.get('/api/user/:id')
  },
  deleteUser: function() {
    return axios.delete('/api/user/:id')
  }
}