import {usersArray} from "../mockUsers.js";

const searchUserAccountByEmailUseCase = (email) => {
    const userByEmail = usersArray.filter((user) => user.email === email)
   
    if (userByEmail.length > 0) {
        return userByEmail;}
    else {
        return "E-mail não cadastrado"}
};

export {searchUserAccountByEmailUseCase};
