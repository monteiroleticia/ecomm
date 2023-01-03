const usersArray = [];

const createUserUseCase = (name, email, password) => {
    usersArray.push({
        userId: usersArray.length + 1,
        name,
        email,
        password,
        createdDate: new Date().toISOString().split('T')[0]
    })
    
    return usersArray;
};

export default createUserUseCase;