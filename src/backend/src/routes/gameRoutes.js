const express = require("express");
const gameRouter = express.Router();
const gameController = require("../controllers/gamersController");

// Rotas para jogos
gameRouter.get("/", gameController.getAllGames);
gameRouter.post("/", gameController.createGame);
gameRouter.get("/:id", gameController.getGamesByUserId);
gameRouter.put("/:id", gameController.updateGame);
gameRouter.delete("/:id", gameController.deleteGame);

module.exports = gameRouter;
