import { usersArray } from '../mockUsers.js';
import { searchUserAccountByEmailUseCase } from './searchUserAccountByEmail.js';

const changeUserNameUseCase = (email, newName) => {
  const userByEmail = searchUserAccountByEmailUseCase(email);
  if (!userByEmail) { return false; }
  if (userByEmail.name == newName) { return false; }

  const userIndex = usersArray.findIndex((user) => user.email === email);
  usersArray[userIndex].name = newName;
  return true;
};

export { changeUserNameUseCase };
