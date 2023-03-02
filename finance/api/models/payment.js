const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init({
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: { min: 0 },
    },
    cardholder: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cardNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isCreditCard: true },
    },
    expDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { is: /^20[2-9][0-9]-(0[1-9]|10|11|12)$/ },
    },
    cvv: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isNumeric: true, len: 3 },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isIn: [['CRIADO', 'CONFIRMADO', 'CANCELADO']] },
    },
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};
