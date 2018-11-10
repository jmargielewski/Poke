const jwt = require('jwt-simple');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('user');

function generateToken(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, keys.JWTSecret);
}

exports.signin = (req, res, next) => {
  res.send({ token: generateToken(req.user) })
};

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }

  User.findOne({ email: email }, (err, existingUser) => {
    if (err) { return next(err); }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is already in use' });
    }

    const user = new User({
      email: email,
      password: password
    });

    user.save((err) => {
      if (err) { return next(err); }

      res.json({ token: generateToken(user) });
    });
  });
};





