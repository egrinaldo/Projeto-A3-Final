const express = require('express');
const platformRouter = express.Router();
const platformController = require('../controllers/platformController');

// Rotas para cateogrias
platformRouter.get('/', platformController.getAllPlatforms);
platformRouter.post('/', platformController.createPlatform);

module.exports = platformRouter;
