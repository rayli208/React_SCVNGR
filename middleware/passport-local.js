const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User")

passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },
  function(email, password, done) {
    console.log(email);
    User.findOne({email: email})
    .then(function(userDB) {
      if(!userDB) {
        console.log("no email found");
        return done(null, false, {
          message: "Incorrect email"
        });
      }
      else if (!userDB.password) {
        console.log("incorrect password");
        return done(null, false, {
          message: "incorrect password"
        });
      }
      return done(null, userDB);
    });
  }
));


passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj)
});

module.exports = passport;