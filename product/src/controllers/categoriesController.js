import Categories from '../models/Category.js';

class CategoryController {
  static listCategories = (_req, res) => {
    Categories.find((err, categories) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).json(categories);
    });
  };

  static addCategory = (req, res) => {
    const category = new Categories(req.body);

    category.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Não foi possível criar uma nova categoria` });
      } else {
        res.status(201).send(category.toJSON());
      }
    });
  };

  static fetchCategoryById = (req, res) => {
    const { id } = req.params;

    Categories.findById(id, (err, category) => {
      if (err) {
        res.status(404).send({ message: `${err.message} - Id da categoria não localizada.` });
      } else {
        res.status(200).json(category);
      }
    });
  };

  static updateCategory = (req, res) => {
    const { id } = req.params;

    Categories.findByIdAndUpdate(id, { $set: req.body }, { new: true }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Categoria atualizada com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteCategory = (req, res) => {
    const { id } = req.params;

    Categories.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(204).send({ message: 'Categoria removida' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static activateCategory = (req, res) => {
    const { id } = req.params;

    Categories.findByIdAndUpdate(id, { $set: req.body }, { new: true }, (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: 'Categoria ativada com sucesso' });
      }
    });
  };
}

export default CategoryController;
