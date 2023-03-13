import jwt from 'jsonwebtoken';

const createToken = (user) => {
  const payload = {id: user._id };
  const key = process.env.JWT_KEY;
  const token = jwt.sign(
    payload,
    key,
    { expiresIn: '1d', algorithm: 'HS256' },
  );
  return token;
};

export default createToken;
