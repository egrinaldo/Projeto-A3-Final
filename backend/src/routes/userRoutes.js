const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/usersController');

// Rotas para usuários
userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userController.createUser);
userRouter.get('/:id', userController.getUserById);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);
userRouter.post('/login', userController.login);

module.exports = userRouter;
