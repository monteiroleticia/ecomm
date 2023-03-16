import Product from '../models/Product.js';

class ProductController {
  static listProducts = (req, res) => {
    Product.find((err, products) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).json(products);
    });
  };

  static addProduct = (req, res) => {
    const product = new Product(req.body);

    product.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Não foi possível cadastrar produto` });
      } else {
        res.status(201).send(product.toJSON());
      }
    });
  };

  static fetchProductById = (req, res) => {
    const { id } = req.params;

    Product.findById(id, (err, product) => {
      if (err) {
        res.status(404).send({ message: `${err.message} - Id do produto não localizado.` });
      } else {
        res.status(200).json(product);
      }
    });
  };

  static updateProduct = (req, res) => {
    const { id } = req.params;

    Product.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: 'Produto atualizado com sucesso' });
      }
    });
  };

  static deleteProduct = (req, res) => {
    const { id } = req.params;

    Product.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(204).send({ message: 'Produto removido' });
      }
    });
  };
}

export default ProductController;
