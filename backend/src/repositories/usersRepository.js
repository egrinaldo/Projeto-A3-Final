const { PrismaClient } = require('@prisma/client');
const categories = require('../Mocks/mockCategories');
const platforms = require('../Mocks/mocksPlatforms');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

// Obtém todos os usuários
async function getAllUsers() {
  return await prisma.$queryRaw`SELECT * FROM User`
}

// Cria um novo usuário
async function createUser(userData) {
  console.log("bateu")
   return await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      username: userData.username
    },
  },
); 
}

// Obtém um usuário pelo ID
async function getUserById(userId) {
  return await prisma.$queryRaw`SELECT * FROM User WHERE id = ${userId}`
}

// Atualiza um usuário pelo ID
async function updateUser(userId, userData) {
  return await prisma.user.update({
    where: {
      id: userId,
    },
    data: userData,
  });
}

// Deleta um usuário pelo ID
async function deleteUser(userId) {
  return result = await prisma.$executeRaw`DELETE FROM User WHERE id = ${userId};`
}

async function login(email, password) {
  const user = await prisma.$queryRaw`SELECT * FROM User WHERE email = ${email}`

  if (!user){
    return false;
  }

  const passwordMatch = await bcrypt.compare(password, user.password); 

  if (!passwordMatch){
    return false;
  }
  
  return user;
 
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  login,
};
