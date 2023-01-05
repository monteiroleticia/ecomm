import {usersArray} from "../mockUsers.js";
import {searchUserAccountByEmailUseCase} from "./searchUserAccountByEmail.js";

const removeUserUseCase = (email) => {
    const userByEmail = searchUserAccountByEmailUseCase(email);
    
    if (userByEmail === false){return false}
    else {
        const userByEmailIndex = userByEmail[0].id - 1;
        usersArray.splice(userByEmailIndex, 1);
        return true 
    }
    
};

export {removeUserUseCase};