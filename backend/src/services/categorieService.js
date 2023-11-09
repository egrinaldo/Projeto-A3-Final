const categorieRepository = require('../repositories/categoriesRepository');

// Obtém todos as categorias
async function getAllCategories() {
  return await categorieRepository.getAllCategories();
}

module.exports = {
    getAllCategories,
};
