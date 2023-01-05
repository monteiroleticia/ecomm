import {usersArray} from "../mockUsers.js";
import {searchUserAccountByEmailUseCase} from "./searchUserAccountByEmail.js";

const addUserAddressUseCase = (email, logradouro, numero, complemento, bairro, cep, cidade, uf) => {
    const userByEmail = searchUserAccountByEmailUseCase(email);  
    if (userByEmail === false){return false}
    else {
        const userIndex = userByEmail[0].id - 1;
        usersArray[userIndex].address = {
            logradouro,
            numero,
            complemento,
            bairro,
            cep,
            cidade,
            uf,
          };
        return true 
    };
};

export {addUserAddressUseCase};