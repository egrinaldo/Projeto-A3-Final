const express = require('express');
const categoryRouter = express.Router();
const categorieController = require('../controllers/categoriesController');

// Rotas para cateogrias
categoryRouter.get('/', categorieController.getAllCategories);

module.exports = categoryRouter;
