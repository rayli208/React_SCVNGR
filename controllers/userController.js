const db = require('../models');
const User = require('../models/User')

module.exports = {

  findUser: function(req, res) {
    db.User.find({_id: req.params.id})
      .then(userDB => res.json(userDB))
      .catch(err => console.log(err));
  },

  login: function(req, res) {
    console.log(req.user);
    res.json({userInfo: req.user, isLoggedIn: true})
  },

  loginCheck: function(req, res) {
    console.log(req.user);
      if (req.user) {
        res.json({isLoggedIn: true, userInfo: req.user});
      } 
      else {
        res.json(false);
      }
  },

  logout: function(req, res) {
    req.logout();
    console.log(req.user);
    res.json(false);
  },

  registerUser: function(req, res) {
    console.log(req.body);
    User
      .register(new User({
        username: req.body.username,
        }), req.body.password,
        function(err) {
        if (err) {
          console.log("Error with user registration", err);
          res.json(err);
        }
        console.log("User registered successfully");
        res.json(true);
      })
  },

  deleteUser: function(req, res) {
    db.User.deleteOne({ _id: req.user.id})
      .then(console.log(req.user))
      .catch(err => console.log(err));
  },

  updateUser: function(req, res) {
    db.User.findOneAndUpdate({
      _id: req.params.id
      }, req.body)
        .then(userDB => res.json(userDB))
        .catch(err => console.log(err));
  }

}
