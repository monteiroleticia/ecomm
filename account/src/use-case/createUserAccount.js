import {usersArray} from "../mockUsers.js";

export function createUserUseCase (name, email, password){
    var newUser = {
        userId: usersArray.length + 1,
        name,
        email,
        password,
        createdDate: new Date().toISOString().substring(0, 10)
    }
    usersArray.push(newUser)
    
    return newUser;
};

