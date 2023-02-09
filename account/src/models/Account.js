import mongoose from 'mongoose'

const accountSchema = new mongoose.Schema(
    {
			name: {
				type: String,
				required: true
			},
			email: {
				type: String, 
				required: true,
				match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
			},
			password: {
				type: String, 
				minLength: 8, 
				match: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/
			},
			CPF: {
				type: String, 
				match: /^[0-9]{11}$/
			},
			phone: {
				type: String,
				match: /^[0-9]{10,13}$/
			},
			address: {
				street: {type: String, required: true},
				number: {type: String, required: true},
				complement: {type: String},
				zipCode: {type: String, match: /^[0-9]{8}$/},
				city: {type: String, required: true},
				state: {
					type: String, 
					required: true,
					match: /^(\s*(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)?)$/
				}
			}
    }
)

const accounts = mongoose.model('accounts', accountSchema);
export default accounts;
