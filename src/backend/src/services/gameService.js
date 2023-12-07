const gameRepository = require("../repositories/gamersRepository");

// Obtém todos os jogos
async function getAllGames() {
  return await gameRepository.getAllGames();
}

// Cria um novo jogo
async function createGame(gameData) {
  return await gameRepository.createGame(gameData);
}

// Obtém um jogo pelo ID
async function getGamesByUserId(userId) {
  return await gameRepository.getGamesByUserId(userId);
}

// Atualiza um jogo pelo ID
async function updateGame(gameId, gameData) {
  return await gameRepository.updateGame(gameId, gameData);
}

// Deleta um jogo pelo ID
async function deleteGame(gameId) {
  return await gameRepository.deleteGame(gameId);
}

module.exports = {
  getAllGames,
  createGame,
  getGamesByUserId,
  updateGame,
  deleteGame,
};
