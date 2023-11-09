const userRepository = require('../repositories/usersRepository');
const bcrypt = require('bcrypt');


// Obtém todos os usuários
async function getAllUsers() {
  return await userRepository.getAllUsers();
}

// Cria um novo usuário
async function createUser(userData) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

  const userWithHashedPassword = {
    ...userData,
    password: hashedPassword,
  };

  return await userRepository.createUser(userWithHashedPassword);
}

// Obtém um usuário pelo ID
async function getUserById(userId) {
  return await userRepository.getUserById(userId);
}

// Atualiza um usuário pelo ID
async function updateUser(userId, userData) {
  return await userRepository.updateUser(userId, userData);
}

// Deleta um usuário pelo ID
async function deleteUser(userId) {
  return await userRepository.deleteUser(userId);
}

async function login(email, password) {

  
  return await userRepository.login(email, password);
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  login,
};
