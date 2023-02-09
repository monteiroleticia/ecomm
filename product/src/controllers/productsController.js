import products from '../models/Product.js';

class ProductController {

    static listProducts = (req, res) => {
        products.find((err, products) => {
            res.status(200).json(products)
        })
    }
    
    static addProduct = (req, res) => {
        let Product = new products(req.body);

        Product.save((err) => {
            if(err) {
                res.status(500).send({message:`${err.message} - Não foi possível cadastrar produto`})
            } else {
                res.status(201).send(Product.toJSON())
            }
        })
    }

    static fetchProductById = (req, res) => {
        const id = req.params.id;

        products.findById(id, (err, Product) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Id do produto não localizado.`})
            } else {
                res.status(200).json(Product)
            }
        })
    }

    static updateProduct = (req, res) => {
        const id = req.params.id;

        products.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
              res.status(200).send({message: 'Produto atualizado com sucesso'})
            } else {
              res.status(500).send({message: err.message})
            }
        })
    }

    static deleteProduct = (req, res) => {
        const id = req.params.id;

        products.findByIdAndDelete(id, (err) => {
            if(!err) {
              res.status(200).send({message: 'Produto removido'})
            } else {
              res.status(500).send({message: err.message})
            }
        })
    }
}

export default ProductController