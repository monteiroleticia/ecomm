import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(12);
const hash = (password) => bcrypt.hashSync(password, salt);

export default hash;
