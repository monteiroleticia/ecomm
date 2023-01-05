import {usersArray} from "../src/mockUsers.js";
import {addUserAddressUseCase} from "../src/use-case/addUserAddress.js";

console.log(addUserAddressUseCase('joaosilva@email.com', 'rua dois', '1520', 'apto 34', 'centro', '08450-000', 'santos', 'SP'))
console.log(usersArray)
