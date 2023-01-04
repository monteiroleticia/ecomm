import {usersArray} from "../mockUsers.js"

const createUserUseCase = (name, email, password) => {
    var newUser = {
        userId: usersArray.length + 1,
        name,
        email,
        password,
        createdDate: new Date().toISOString().split('T')[0]
    }
    usersArray.push(newUser)
    
    return newUser;
};

export {createUserUseCase};