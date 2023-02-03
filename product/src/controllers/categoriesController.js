import categories from '../models/Category.js';

class CategoryController {

    static listCategories = (req, res) => {
        categories.find((err, categories) => {
            res.status(200).json(categories)
        })
    }

    static addCategory = (req, res) => {
        let category = new categories(req.body);

        category.save((err) => {
            if(err) {
                res.status(500).send({message:`${err.message} - Não foi possível criar uma nova categoria`})
            } else {
                res.status(201).send(category.toJSON())
            }
        })

    }
}

export default CategoryController