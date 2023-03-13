import passport from 'passport';
import jwt from 'jsonwebtoken';
import { Strategy as BearerStrategy } from 'passport-http-bearer';

passport.use(
  new BearerStrategy(
    (token, done) => {
      const payload = jwt.verify(token, process.env.JWT_KEY);
      done(null, payload.id, { token });
    },
  ),
);

export default BearerStrategy;
