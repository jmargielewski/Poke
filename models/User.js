const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const { Schema } = mongoose;

// GOOGLE USER
const userGoogleSchema = new Schema({
  googleId: String,
});
mongoose.model('userGoogle', userGoogleSchema);

// USER
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  name: String,
  surname: String,
  telephone: String,
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return callback(err); }

    callback(null, isMatch);
  });
};

// before the model gets saved
userSchema.pre('save', function(next) {
  const user = this;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); }

      user.password = hash;
      next();
    });
  })
});
mongoose.model('user', userSchema);
