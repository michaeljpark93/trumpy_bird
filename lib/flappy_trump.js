import GameView from "./game_view.js"
import ReadyScreen from './ready_screen.js';
import Game from "./game.js";

let canvasEl = document.getElementById('canvas');
let startGame = document.getElementById('start-button');

let game = new Game(window);
let options = { canvasEl, window, game };
let readyScreen = new ReadyScreen(options);

let gameViewOptions = { window, game, readyScreen };
let gameView = new GameView(gameViewOptions);
gameView.start(canvasEl);

startGame.addEventListener('click',() => gameView.gameStart());    

window.onkeyup = (e) => {
    if (e.keyCode == 32) {
        if (gameView.gameView == 1) {
            () => gameView.renderStartGame();
            console.log("it workssss");
        } else if (gameView.gameView == 2) {
            conole.log("jump");
            () => game.callJump();
        };
    };
};

window.onclick = () => { 
    if (gameView.gameView == 1) {
        () => gameView.renderStartGame();
        console.log("click workssss");
    } else if (gameView.gameView == 2) {
        conole.log("click jump");
        () => game.callJump()
    }
};
