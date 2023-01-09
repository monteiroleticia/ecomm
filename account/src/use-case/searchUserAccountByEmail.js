import {usersArray} from "../mockUsers.js";

const searchUserAccountByEmailUseCase = (email) => {
    return usersArray.find((user) => user.email === email)
};

export {searchUserAccountByEmailUseCase};
