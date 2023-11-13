const categorieRepository = require('../repositories/categoriesRepository');

// Obtém todos as categorias
async function getAllCategories() {
  return await categorieRepository.getAllCategories();
}

async function createCategory(categoryData) {
  return await categorieRepository.createCategory(categoryData);
}

module.exports = {
    getAllCategories,
    createCategory,
};
