import GameView from './game_view.js';
import ReadyScreen from './ready_screen.js';
import Game from './game.js';

const canvasEl = document.getElementById('canvas');
canvasEl.width = window.innerWidth - 20;
canvasEl.height = window.innerHeight - 20;
const startGame = document.getElementById('start-button');
const background = document.getElementsByClassName('background');
// let readyScreenEl = document.getElementsByClassName('ready-screen');

const game = new Game();
const options = { canvasEl, game };
const readyScreen = new ReadyScreen(options);

const gameViewOptions = { game, readyScreen };
const gameView = new GameView(gameViewOptions);
gameView.start(canvasEl);

document.onkeyup = (e) => {
  if (e.keyCode === 32) {
    if (gameView.gameView === 2) {
      game.callJump();
    }
  }
};

const buttonFunction = () => {
  gameView.gameStart();

  const action = document.getElementsByTagName('button');
  for (let i = 0; i < action.length; i++) {
    action[i].setAttribute('class', 'hide');
  }
  backgroundHandler();
};

const backgroundHandler = () => {
  background.setAttribute('id', 'show');
  background.addEventListener('click', () => {
    gameView.renderStartGame();
  });
};

document.onclick = (e) => {
  if (e.target === startGame) {
    buttonFunction();
    // } else {
    //     gameView.renderStartGame();
    // }
  }
};

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
