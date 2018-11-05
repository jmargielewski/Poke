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
});

userSchema.pre
const ModelClass = mongoose.model('user', userSchema);
module.exports = ModelClass;
