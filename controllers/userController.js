const db = require('../models')

module.exports = {

  findUser: function(req, res) {
    db.User.find({_id: req.params.id})
      .then(userDB => res.json(userDB))
      .catch(err => console.log(err));
  },

  login: function(req, res) {
    console.log(req.user);
    res.json('/home')
  },

  registerUser: function(req, res) {
    db.User.create(req.body)
      .then(userDB => {
        console.log(req.body);
        login();
      })
      .catch(err => console.log(err));
  },

  deleteUser: function(req, res) {
    db.User.deleteOne({ _id: req.user.id})
      .then(console.log(req.user))
      .catch(err => console.log(err));
  },

}
