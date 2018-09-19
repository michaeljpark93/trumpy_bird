import GameView from './game_view';
import ReadyScreen from './ready_screen';
import Game from './game';

const canvasEl = document.getElementById('canvas');
canvasEl.width = window.innerWidth - 20;
canvasEl.height = window.innerHeight - 20;

const game = new Game();
const options = { canvasEl, game };
const readyScreen = new ReadyScreen(options);

const gameViewOptions = { game, readyScreen, canvasEl };
const gameView = new GameView(gameViewOptions);
gameView.start();

let startRV = false;
let startPV = false;
const startGame = document.getElementsByClassName('start')[0];
const readyView = document.getElementsByClassName('ready-view')[0];
const playView = document.getElementsByClassName('play-view')[0];
const soundToggle = document.getElementsByClassName('volume')[0];

function soundHandler(e) {
  if (e.target === e.currentTarget) {
    gameView.sound = !gameView.sound;

    soundToggle.removeAttribute('id');
    if (gameView.sound) {
      soundToggle.setAttribute('id', 'on');
    } else {
      soundToggle.setAttribute('id', 'off');
    }
  }
}

soundToggle.addEventListener('click', soundHandler, false);

function playViewHandler(e) {
  if (e.target === e.currentTarget || e.which === 32) {
    game.callJump();
  }
}

function readyViewHandler(e) {
  if (e.target === e.currentTarget || e.which === 32) {
    startRV = false;
    startPV = true;
    gameView.renderStartGame();
  }

  if (startPV) {
    readyView.setAttribute('id', 'hide');
    readyView.removeEventListener('click', readyViewHandler, false);
    document.removeEventListener('keyup', readyViewHandler, false);

    playView.removeAttribute('id');
    playView.addEventListener('click', playViewHandler, false);
    document.addEventListener('keyup', playViewHandler, false);
  }
}

const startGameFunction = (e) => {
  if (e.target === e.currentTarget) {
    startRV = true;
  }
  gameView.gameStart();

  if (startRV) {
    const buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].setAttribute('id', 'hide');
    }
    startGame.removeEventListener('click', startGameFunction, false);

    readyView.removeAttribute('id');
    readyView.addEventListener('click', readyViewHandler, false);
    document.addEventListener('keyup', readyViewHandler, false);
  }
};

startGame.addEventListener('click', startGameFunction, false);
