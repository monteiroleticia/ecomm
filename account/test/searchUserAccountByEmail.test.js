import {usersArray} from "../src/mockUsers.js"; 
import {searchUserAccountByEmailUseCase} from "../src/use-case/searchUserAccountByEmail.js";

console.log(searchUserAccountByEmailUseCase('joselima@email.com'));
console.log(searchUserAccountByEmailUseCase('maria@email.com'));

