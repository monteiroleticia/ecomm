import Accounts from '../models/Account.js';

class AccountController {
  static listAccounts = (req, res) => {
    Accounts.find((err, accounts) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).json(accounts);
    });
  };

  static addAccount = (req, res) => {
    const Account = new Accounts(req.body);

    Account.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Não foi possível cadastrar usuário` });
      } else {
        res.status(201).send(Account.toJSON());
      }
    });
  };

  static fetchAccountById = (req, res) => {
    const { id } = req.params;

    Accounts.findById(id, (err, Account) => {
      if (err) {
        res.status(404).send({ message: `${err.message} - Usuário não localizado.` });
      } else {
        res.status(200).json(Account);
      }
    });
  };

  static updateAccount = (req, res) => {
    const { id } = req.params;

    Accounts.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Usuário atualizado com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteAccount = (req, res) => {
    const { id } = req.params;

    Accounts.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Usuário removido' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default AccountController;
