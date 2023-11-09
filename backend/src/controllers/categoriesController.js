const categorieService = require('../services/categorieService');

// Obtém todos as categorias
async function getAllCategories(req, res) {
  try {
    const categories = await categorieService.getAllCategories();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar categorias.' });
  }
}

module.exports = {
    getAllCategories,
};
