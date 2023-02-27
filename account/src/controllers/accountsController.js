import accounts from '../models/Account.js';

class AccountController {

    static listAccounts = (req, res) => {
        accounts.find((err, accounts) => {
            res.status(200).json(accounts)
        })
    }
    
    static addAccount = (req, res) => {
        let Account = new accounts(req.body);

        Account.save((err) => {
            if(err) {
                res.status(500).send({message:`${err.message} - Não foi possível cadastrar usuário`})
            } else {
                res.status(201).send(Account.toJSON())
            }
        })
    }

    static fetchAccountById = (req, res) => {
        const id = req.params.id;

        accounts.findById(id, (err, Account) => {
            if(err) {
                res.status(404).send({message: `${err.message} - Usuário não localizado.`})
            } else {
                res.status(200).json(Account)
            }
        })
    }

    static updateAccount = (req, res) => {
        const id = req.params.id;

        accounts.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
              res.status(200).send({message: 'Usuário atualizado com sucesso'})
            } else {
              res.status(500).send({message: err.message})
            }
        })
    }

    static deleteAccount = (req, res) => {
        const id = req.params.id;

        accounts.findByIdAndDelete(id, (err) => {
            if(!err) {
              res.status(200).send({message: 'Usuário removido'})
            } else {
              res.status(500).send({message: err.message})
            }
        })
    }
}

export default AccountController