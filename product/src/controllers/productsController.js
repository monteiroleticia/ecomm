import Products from '../models/Product.js';

class ProductController {
  static listProducts = (req, res) => {
    Products.find((err, products) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).json(products);
    });
  };

  static addProduct = (req, res) => {
    const product = new Products(req.body);

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

    Products.findById(id, (err, Product) => {
      if (err) {
        res.status(404).send({ message: `${err.message} - Id do produto não localizado.` });
      } else {
        res.status(200).json(Product);
      }
    });
  };

  static updateProduct = (req, res) => {
    const { id } = req.params;

    Products.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Produto atualizado com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteProduct = (req, res) => {
    const { id } = req.params;

    Products.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(204).send({ message: 'Produto removido' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default ProductController;
