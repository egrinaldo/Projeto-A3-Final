const express = require('express');
const platformRouter = express.Router();
const platformController = require('../controllers/platformController');

// Rotas para cateogrias
platformRouter.get('/', platformController.getAllPlatforms);
platformRouter.get('/:id', platformController.getPlatformByUserId);
platformRouter.post('/', platformController.createPlatform);
platformRouter.put('/', platformController.updatePlatform);
platformRouter.delete('/:id', platformController.deletePlatform);

module.exports = platformRouter;
