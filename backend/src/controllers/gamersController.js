const gameService = require('../services/gameService');

// Obtém todos os jogos
async function getAllGames(req, res) {
  try {
    const games = await gameService.getAllGames();
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar jogos.' });
  }
}

// Cria um novo jogo
async function createGame(req, res) {
  try {
    console.log(req.body)
    const newGame = await gameService.createGame(req.body);   
    res.status(201).json(newGame);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar jogo.' });
  }
}

// Obtém um jogo pelo ID
async function getGameById(req, res) {
  const gameId = parseInt(req.params.id);

  try {
    const game = await gameService.getGameById(gameId);
    if (!game) {
      res.status(404).json({ error: 'Jogo não encontrado.' });
    } else {
      res.json(game);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar jogo.' });
  }
}

// Atualiza um jogo pelo ID
async function updateGame(req, res) {
  const gameId = parseInt(req.params.id);

  try {
    const updatedGame = await gameService.updateGame(gameId, req.body);
    if (!updatedGame) {
      res.status(404).json({ error: 'Jogo não encontrado.' });
    } else {
      res.json(updatedGame);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar jogo.' });
  }
}

// Deleta um jogo pelo ID
async function deleteGame(req, res) {
  const gameId = parseInt(req.params.id);

  try {
    const deletedGame = await gameService.deleteGame(gameId);
    if (!deletedGame) {
      res.status(404).json({ error: 'Jogo não encontrado.' });
    } else {
      res.json({ message: 'Jogo excluído com sucesso.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir jogo.' });
  }
}

module.exports = {
  getAllGames,
  createGame,
  getGameById,
  updateGame,
  deleteGame,
};
