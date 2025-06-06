import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
  {
    _id: false,
    street: { type: String, required: true },
    number: { type: String, required: true },
    complement: { type: String },
    zipCode: { type: String, match: /^[0-9]{8}$/ },
    city: { type: String, required: true },
    state: {
      type: String,
      required: true,
      match: /^(\s*(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)?)$/,
    },
  },
);

const accountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/,
    },
    password: {
      type: String,
      minLength: 8,
      match: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/,
    },
    CPF: {
      type: String,
      match: /^[0-9]{11}$/,
    },
    phone: {
      type: String,
      match: /^[0-9]{10,13}$/,
    },
    address: {
      type: addressSchema,
      required: true,
    },

  },
);

const Account = mongoose.model('accounts', accountSchema);
export default Account;
