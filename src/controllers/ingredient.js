import Ingredient from "../models/ingredient";

class IngredientController {
  async index(req, res) {
    try {
      const ingredients = await Ingredient.findAll();
      res.status(200).json(ingredients);
    } catch (error) {}
  }
}

export default new IngredientController();
