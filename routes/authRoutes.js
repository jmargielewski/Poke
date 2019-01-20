const passport = require('passport');
const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');

const requierGoogleAuth = passport.authenticate('google');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback',
    requierGoogleAuth,
    (req, res) => {
      res.redirect('/dashboard')
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/')
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.post('/signIn', requireSignin, Authentication.signin);

  app.post('/signUp', Authentication.signup);

  // app.get('/', requireAuth, (req, res) => {
  //   res.send({ hello: 'welcome' });
  // });
};
