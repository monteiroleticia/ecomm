import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { createHash } from 'crypto';
import blocklist from './blocklist.js';

const existsAsync = promisify(blocklist.exists).bind(blocklist);
const setAsync = promisify(blocklist.set).bind(blocklist);

function generateTokenHash(token) {
  return createHash('sha256').update(token).digest('hex');
}

const addToBlocklist = async (token) => {
  const expDate = jwt.decode(token).exp;
  const tokenHash = generateTokenHash(token);
  await setAsync(tokenHash, '');
  blocklist.expireat(tokenHash, expDate);
};

const blocklistedCheck = async (token) => {
  const tokenHash = generateTokenHash(token);
  const result = await existsAsync(tokenHash);
  return result === 1;
};

export default { addToBlocklist, blocklistedCheck };
