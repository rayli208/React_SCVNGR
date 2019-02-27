// Initiate mongoose, schema and passport local strategy
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// Create user schema to take in first name, last name, email address, and password
const UserSchema = new Schema ({

  first_name: {
    type: String,
    trim: true,
    required: true
  },
  last_name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 8 && input.length <= 16
      },
      "Password should be between 8 and 16 characters."
    ]
  },
  user_created: {
    type: Date,
    default: Date.now
  },
  jobInfo: {
    type: Schema.Types.ObjectId,
    ref: "JobInfo"
  }

});

UserSchema.plugin(passportLocalMongoose);

UserSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};

// Create user model from the schema
const User = mongoose.model("User", UserSchema);

module.exports = User;