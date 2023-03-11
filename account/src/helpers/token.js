import jwt from 'jsonwebtoken';

const createToken = (id) => {
  const key = process.env.JWT_KEY;
  const token = jwt.sign(
    { id },
    key,
    { expiresIn: '1d', algorithm: 'HS256' },
  );
  return token;
};

export default createToken;
