const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Obtém todos os jogos
async function getAllGames() {
  try {
    const result = await prisma.$queryRaw`SELECT
     id,
     name,
     rated,
     status
     FROM Game`;
    return result;
  } catch (error) {
    console.error("Erro ao executar consulta SQL:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Cria um novo jogo
async function createGame(gameData) {
  const gameCreated =
    await prisma.$executeRaw`INSERT INTO Game (userId, platformId, categoryId, name, rated, status)
   VALUES (
    ${gameData.userId},
    ${gameData.platformId},
    ${gameData.categoryId},
    ${gameData.name},
    ${gameData.rated},
    ${gameData.status}
    );`;

  if (gameCreated) {
    return getGamesByUserId(gameData.userId);
  }
}

async function getGameByName(name) {
  return await prisma.$queryRaw`SELECT * FROM Game WHERE name = ${name}`;
}

// Obtém um jogo pelo ID
async function getGamesByUserId(userId) {
  return await prisma.$queryRaw`SELECT
  g.id,
  g.userId AS userId,
  p.id AS platformId,
  p.name AS platformName,
  c.id AS categoryId,
  c.name AS categoryName,
  g.name,
  g.rated,
  g.status
  FROM Game g
  JOIN Platform p ON g.platformId = p.id
  JOIN Category c ON g.categoryId = c.id
  WHERE g.userId = ${userId}`;
}

// Atualiza um jogo pelo ID
async function updateGame(gameId, gameData) {
  const gameUpdated =  await prisma.$executeRaw`UPDATE Game SET  
   platformId = ${gameData.platformId},
   categoryId = ${gameData.categoryId},
   name = ${gameData.name},
   rated=${gameData.rated},
   status = ${gameData.status}
   WHERE id = ${gameId}
   ;`

  if (gameUpdated){
   return getGamesByUserId(gameData.userId)
  }
}

// Deleta um jogo pelo ID
async function deleteGame(gameId) {
  return await prisma.game.delete({
    where: {
      id: gameId,
    },
  });
}

module.exports = {
  getAllGames,
  createGame,
  getGamesByUserId,
  updateGame,
  deleteGame,
};
