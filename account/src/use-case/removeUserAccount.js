import {usersArray} from "../mockUsers.js";
import {searchUserAccountByEmailUseCase} from "./searchUserAccountByEmail.js";

const removeUserUseCase = (email) => {
    const userByEmail = searchUserAccountByEmailUseCase(email);
    if (!userByEmail){return false}
    else {
        const userIndex = usersArray.findIndex(user => user.email === email);
        usersArray.splice(userIndex, 1);
        return true
    }
    
};

export {removeUserUseCase};