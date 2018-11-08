const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('../config/keys');

const mongoose = require('mongoose');
const UserGoogle = mongoose.model('userGoogle');
const User = mongoose.model('user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  UserGoogle.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await UserGoogle.findOne({ googleId: profile.id });

      if(existingUser) {
        return done(null, existingUser);
      }

      const user = new UserGoogle ({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader('authorization'),
      secretOrKey: keys.JWTSecret,
    },
    (payload, done) => {
      User.findById(payload.sub, (err, user) => {
        if (err) { return done(err, false); }

        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      });
    }
  )
);
