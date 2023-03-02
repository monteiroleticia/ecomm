import { usersArray } from '../mockUsers.js';
import { searchUserAccountByEmailUseCase } from './searchUserAccountByEmail.js';

const addUserAddressUseCase = (email, logradouro, numero, complemento, bairro, cep, cidade, uf) => {
  const userByEmail = searchUserAccountByEmailUseCase(email);
  if (!userByEmail) { return false; }

  const userIndex = usersArray.findIndex((user) => user.email === email);
  usersArray[userIndex].address = {
    logradouro,
    numero,
    complemento,
    bairro,
    cep,
    cidade,
    uf,
  };
  return true;
};

export { addUserAddressUseCase };
