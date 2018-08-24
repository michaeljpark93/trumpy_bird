import GameView from "./game_view.js"
import ReadyScreen from './ready_screen.js';
import Game from "./game.js";

let canvasEl = document.getElementById('canvas');
let startGame = document.getElementById('start-button');
// let readyScreenEl = document.getElementsByClassName('ready-screen');

let game = new Game();
let options = { canvasEl, game };
let readyScreen = new ReadyScreen(options);

let gameViewOptions = { game, readyScreen };
let gameView = new GameView(gameViewOptions);
gameView.start(canvasEl);

document.onkeyup = (e) => {
    if (e.keyCode === 32) {
        if (gameView.gameView === 2) {
            game.callJump();
        };
    };
};

const buttonFunction = () => {
    gameView.gameStart();

    const action = document.getElementsByTagName("button");
    for (let i = 0; i < action.length; i++) {
        action[i].setAttribute("class", "hide");
    };
}

document.onclick = (e) => {
    if (e.target === startGame) {
        buttonFunction();
    } else {
        gameView.renderStartGame();
    }
}

// startGame.addEventListener("click", () => {
//     startGame.removeEventListener("click", buttonFunction())
//     document.onclick = () => { gameView.renderStartGame() };
// })

// startGame.addEventListener('click', () => gameView.gameStart());

// readyScreenEl.addEventListener('click', () => {
//     gameView.renderStartGame();
//     readyScreenEl.setAttribute("class", "play-screen");
// });

// readyScreenEl.onkeyup = (e) => {
//     if (e.keyCode == 32) { 
//         () => gameView.renderStartGame();
//         readyScreen.setAttribute("class", "play-screen");
//     };
// };

// let playScreen = document.getElementsByClassName("play-screen");
// playScreen.addEventListener('click', () => game.callJump());
// playScreen.onkeyup = (e) => {
//     if (e.keyCode == 32) { 
//         () => game.callJump();
//     };
// };