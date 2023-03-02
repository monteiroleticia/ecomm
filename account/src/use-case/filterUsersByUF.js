import { usersArray } from '../mockUsers.js';

const filterUsersByUFUseCase = (uf) => {
  const usersByUF = usersArray.filter((user) => user.address?.uf === uf);
  if (usersByUF.length > 0) {
    return usersByUF;
  } return `Não há usuários de ${uf}`;
};

export { filterUsersByUFUseCase };
