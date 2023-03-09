import Account from '../models/Account.js';
import hash from '../helpers/hash.js';

class AccountController {
  static listAccounts = (req, res) => {
    Account.find((err, accounts) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).json(accounts);
    });
  };

  static addAccount = (req, res) => {
    const hashedPassword = hash(req.body.password);
    const account = new Account({ ...req.body, password: hashedPassword });

    account.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Não foi possível cadastrar usuário` });
      } else {
        res.status(201).send(account.toJSON());
      }
    });
  };

  static fetchAccountById = (req, res) => {
    const { id } = req.params;

    Account.findById(id, (err, account) => {
      if (err) {
        res.status(404).send({ message: `${err.message} - Usuário não localizado.` });
      } else {
        res.status(200).json(account);
      }
    });
  };

  static updateAccount = (req, res) => {
    const { id } = req.params;

    Account.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Usuário atualizado com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteAccount = (req, res) => {
    const { id } = req.params;

    Account.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(204).send({ message: 'Usuário removido' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default AccountController;
