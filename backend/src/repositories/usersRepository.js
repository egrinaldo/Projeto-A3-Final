const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');


// Cria um novo usuário
async function createUser(userData) {
  const userCreated =  await prisma.$executeRaw`INSERT INTO User (name, email, password, username)
   VALUES (${userData.name}, ${userData.email}, ${userData.password}, ${userData.username});`

   if (userCreated){
    return getUserByEmail(userData.email)
   }
}

// Obtém um usuário pelo ID
async function getUserById(userId) {
  return await prisma.$queryRaw`SELECT * FROM User WHERE id = ${userId}`
}

async function getUserByEmail(email){
  return await prisma.$queryRaw`SELECT * FROM User WHERE email = ${email}`	
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
  createUser,
  getUserById,
  login,
};
