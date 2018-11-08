const passport = require('passport');
const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback',
    passport.authenticate('google'),
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

  app.post('/signup', Authentication.signup);

  app.get('/', requireAuth, (req, res) => {
    res.send({ hello: 'welcome' });
  });
};
