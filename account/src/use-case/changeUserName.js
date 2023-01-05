import {usersArray} from "../mockUsers.js";
import {searchUserAccountByEmailUseCase} from "./searchUserAccountByEmail.js";

const changeUserNameUseCase = (email, newName) => {
    const userByEmail = searchUserAccountByEmailUseCase(email);
    if (userByEmail == false){return false}
    else if (userByEmail[0].name == newName){return false}
    else{
        const userIndex = userByEmail[0].id - 1;
        usersArray[userIndex].name = newName;
        return true
    }
}


export {changeUserNameUseCase}
