import { usersArray } from '../src/mockUsers.js';
import { changeUserNameUseCase } from '../src/use-case/changeUserName.js';

console.log(changeUserNameUseCase('maria@email.com', 'Maria Santos'));
console.log(changeUserNameUseCase('mara@email.com', 'Mara Santos'));
console.log(changeUserNameUseCase('joaosilva@email.com', 'João Lemos da Silva'));
console.log(usersArray);
