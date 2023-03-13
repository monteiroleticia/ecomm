const passport = require('passport');
const jwt = require('jsonwebtoken');
const BearerStrategy = require('passport-http-bearer').Strategy;

passport.use(
  new BearerStrategy(
    (token, done) => {
      const payload = jwt.verify(token, process.env.JWT_KEY);
      done(null, payload.id, { token });
    },
  ),
);

module.exports = BearerStrategy;
