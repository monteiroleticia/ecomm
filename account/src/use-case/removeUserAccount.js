import {usersArray} from "../mockUsers.js";
import {searchUserAccountByEmailUseCase} from "./searchUserAccountByEmail.js";

const removeUserUseCase = (email) => {
    const userByEmail = searchUserAccountByEmailUseCase(email);
    const userByEmailIndex = userByEmail[0].id - 1;
    if (userByEmail == "E-mail não cadastrado"){return userByEmail}
    else {
        usersArray.splice(userByEmailIndex, 1)
        return "Usuário Removido"
    }
    
};

export {removeUserUseCase};