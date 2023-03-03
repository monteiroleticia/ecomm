import { createUserUseCase } from '../src/use-case/createUserAccount.js';
import { usersArray } from '../src/mockUsers.js';

console.log(usersArray);
console.log(createUserUseCase('Josué Lima', 'josuelima@email.com', 'senhadoJosue'));
