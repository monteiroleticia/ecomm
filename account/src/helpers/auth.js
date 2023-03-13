import passport from 'passport';
import bcrypt from 'bcryptjs';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import jwt from 'jsonwebtoken';
import Account from '../models/Account.js';

const verifyPassword = (inputPassword, dbPassword) => bcrypt.compareSync(inputPassword, dbPassword);

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
}, (email, password, done) => {
  Account.findOne({ email }, (err, account) => {
    if (err) { return done(err); }
    if (!account) { return done(null, false); }
    if (!verifyPassword(password, account.password)) {
      return done(null, false);
    }
    done(null, account);
    return true;
  });
}));

passport.use(new BearerStrategy((token, done) => {
  const payload = jwt.verify(token, process.env.JWT_KEY);
  Account.findById(payload.id, (err, account) => {
    if (err) { return done(err); }
    if (!account) { return done(null, false); }
    return done(null, account, { token });
  });
}));

export { LocalStrategy, BearerStrategy };
