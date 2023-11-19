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
    return getGameByName(gameData.name);
  }
}

async function getGameByName(name) {
  return await prisma.$queryRaw`SELECT * FROM Game WHERE name = ${name}`;
}

// Obtém um jogo pelo ID
async function getGamesByUserId(userId) {
  return await prisma.$queryRaw`SELECT * FROM Game WHERE userId = ${userId}`;
}

// Atualiza um jogo pelo ID
async function updateGame(gameId, gameData) {
  return await prisma.game.update({
    where: {
      id: gameId,
    },
    data: gameData,
  });
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
