import { usersArray } from '../mockUsers.js';

const searchUserAccountByEmailUseCase = (email) => usersArray.find((user) => user.email === email);

export { searchUserAccountByEmailUseCase };
