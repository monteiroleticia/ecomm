import {usersArray} from "../src/mockUsers.js"; 
import {removeUserUseCase} from "../src/use-case/removeUserAccount.js";

console.log(usersArray);
console.log(removeUserUseCase('maria@email.com'));
console.log(removeUserUseCase('mara@email.com'));
console.log(usersArray);
