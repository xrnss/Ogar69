const Server = require("./network/server");
const Game = require("./game/game");

const game = new Game({
    VIRUS_COUNT: 0,
    PLAYER_SPAWN_SIZE: 1000,
});
const server = new Server(game);
const engine = game.engine;

(async () => {
    await engine.init();
    await server.open();
})();
