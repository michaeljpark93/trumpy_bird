/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/flappy_trump.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/enemy.js":
/*!**********************!*\
  !*** ./lib/enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Enemy {
  constructor(options) {
    this.size = 110;
    [this.top, this.bottom] = options.topBot;
    [this.x, this.y] = options.pos;
    this.speed = options.speed;
    this.defeated = false;
    this.height = window.innerHeight - 20;
    this.enemy1 = new Image();
    this.enemy1.src = './assets/1.png';
    this.enemy2 = new Image();
    this.enemy2.src = './assets/2.png';
    this.enemy3 = new Image();
    this.enemy3.src = './assets/3.png';
    this.enemy4 = new Image();
    this.enemy4.src = './assets/4.png';
    this.enemies = [this.enemy1, this.enemy2, this.enemy3, this.enemy4];
    this.color = this.enemies[options.color];
  }

  draw(ctx) {
    this.generateTop(ctx);
    this.generateBot(ctx);
  }

  generateTop(ctx) {
    for (let i = 0; i < this.top; i += 1) {
      const yPos = i * this.size;
      ctx.drawImage(this.color, this.x, yPos, this.size, this.size);
    }
  }

  generateBot(ctx) {
    for (let i = 0; i < this.bottom; i += 1) {
      const yPos = i * this.size;
      ctx.drawImage(this.color, this.x, this.height - this.size - yPos, this.size, 110);
    }
  }

  update(speed) {
    this.x -= speed;
  }

  beaten() {
    if (this.x < -this.size) return true;
    return false;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Enemy);


/***/ }),

/***/ "./lib/flappy_trump.js":
/*!*****************************!*\
  !*** ./lib/flappy_trump.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ "./lib/game_view.js");
/* harmony import */ var _ready_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ready_screen */ "./lib/ready_screen.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./lib/game.js");




const canvasEl = document.getElementById('canvas');
canvasEl.width = window.innerWidth - 20;
canvasEl.height = window.innerHeight - 20;

const game = new _game__WEBPACK_IMPORTED_MODULE_2__["default"]();
const options = { canvasEl, game };
const readyScreen = new _ready_screen__WEBPACK_IMPORTED_MODULE_1__["default"](options);

const gameViewOptions = { game, readyScreen };
const gameView = new _game_view__WEBPACK_IMPORTED_MODULE_0__["default"](gameViewOptions);
gameView.start(canvasEl);

let startRV = false;
let startPV = false;
const startGame = document.getElementsByClassName('start')[0];
const readyView = document.getElementsByClassName('ready-view')[0];
const playView = document.getElementsByClassName('play-view')[0];

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


/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trump__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trump */ "./lib/trump.js");
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ "./lib/enemy.js");
/* harmony import */ var _start_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start_screen */ "./lib/start_screen.js");




class Game {
  constructor() {
    this.screen = new _start_screen__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.gameScreen = 0;
    this.enemies = [];
    this.width = window.innerWidth - 20;
    this.height = window.innerHeight - 20;
    this.nEnemies = Math.floor(this.height / 100) - 2;
    this.trump = this.createTrump();
  }

  createTrump() {
    const size = this.height / 7;
    const pos = [this.width / 5, this.height / 2 - size];
    const trump = new _trump__WEBPACK_IMPORTED_MODULE_0__["default"]({ size, pos });
    return trump;
  }

  createEnemies() {
    this.interval = setInterval(() => this.createEnemy(), 1500);
  }

  stopCreateEnemies() {
    clearInterval(this.interval);
  }

  createEnemy(speed) {
    const pos = [this.width, this.height];
    const topBot = this.generateEnemyPosition();
    const color = Math.floor(Math.random() * 4);
    const options = {
      pos, speed, topBot, color,
    };
    const enemy = new _enemy__WEBPACK_IMPORTED_MODULE_1__["default"](options);
    this.enemies.push(enemy);
  }

  generateEnemyPosition() {
    const top = Math.floor(Math.random() * (this.nEnemies - 1)) + 1;
    const bottom = this.nEnemies - top;
    const topBot = [top, bottom];
    return topBot;
  }

  callJump() {
    this.trump.jump();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./lib/game_over.js":
/*!**************************!*\
  !*** ./lib/game_over.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GameOver {
  constructor(score, game) {
    this.score = score;
    this.game = game;
    this.image = new Image();
    this.image.src = './assets/gameover.png';
    this.buttons = document.getElementsByTagName('button');
    this.playView = document.getElementsByClassName('play-view')[0];
  }

  draw(ctx) {
    ctx.drawImage(this.image, window.innerWidth / 2 - 150, window.innerHeight / 4 - 100, 250, 100);

    this.renderScore(ctx);

    this.game.trump.drawDead(ctx);
    this.game.trump.fall(window);
    this.renderResetGame();
  }

  renderScore(ctx) {
    ctx.font = '60px Electrolize';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 10;
    ctx.fillStyle = 'white';
    ctx.strokeText('Final score:', window.innerWidth / 2 - 230, window.innerHeight / 2.5);
    ctx.fillText('Final score:', window.innerWidth / 2 - 230, window.innerHeight / 2.5);
    ctx.font = '80px Electrolize';
    ctx.strokeText(this.score, window.innerWidth / 2 + 100, window.innerHeight / 2.5);
    ctx.fillText(this.score, window.innerWidth / 2 + 100, window.innerHeight / 2.5);
  }

  renderResetGame() {
    this.playView.setAttribute('id', 'hide');
    for (let i = 0; i < this.buttons.length; i += 1) {
      this.buttons[i].removeAttribute('id');
    }
    this.buttons[0].onclick = (e) => {
      if (e.target === e.currentTarget) {
        window.location.reload(true);
      }
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (GameOver);


/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _start_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start_screen */ "./lib/start_screen.js");
/* harmony import */ var _game_over__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_over */ "./lib/game_over.js");



class GameView {
  constructor(options) {
    this.startScreen = new _start_screen__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.readyScreen = options.readyScreen;
    this.game = options.game;
    this.gameView = 0;
    this.score = 0;
    this.speed = 7;
    this.bgPos = 0;
    this.bg2Pos = window.innerWidth - 20;
    this.background = new Image();
    this.backgroundFlipped = new Image();
    this.background.src = './assets/bg5.jpg';
    this.backgroundFlipped.src = './assets/bg5-flipped.jpg';
    this.gameOverSound = new Audio('./assets/audio/die.wav');
    this.pointSound = new Audio('./assets/audio/kaching.m4a');
    this.backgroundMusic = new Audio('./assets/audio/background.wav');
  }

  start(canvasEl) {
    const ctx = canvasEl.getContext('2d');

    const animateCallback = () => {
      this.frame = requestAnimationFrame(animateCallback);
      this.renderBackground(ctx);

      switch (this.gameView) {
        case 1:
          this.readyScreen.draw();
          break;
        case 2:
          this.renderPlayScreen(ctx);
          break;
        default:
          this.renderStartScreen(ctx);
          break;
      }
    };
    animateCallback();
  }

  gameStart() {
    this.gameView = 1;
    this.backgroundMusic.play();
  }

  // Trumpy Bird intro screen view
  renderStartScreen(ctx) {
    this.startScreen.draw(ctx);
    this.game.trump.drawStart(ctx);
    this.game.trump.move();
  }

  renderStartGame() {
    this.gameView = 2;
    this.game.createEnemies(this.speed);
  }

  renderPlayScreen(ctx) {
    for (let i = this.game.enemies.length - 1; i >= 0; i -= 1) {
      this.game.trump.collided(this.game.enemies[0], window);

      this.game.enemies[i].draw(ctx);
      this.game.enemies[i].update(this.speed);

      if (this.game.enemies[i].beaten()) {
        this.game.enemies.splice(i, 1);
      }
    }

    this.game.trump.draw(ctx);
    this.game.trump.move();
    this.game.trump.fall(window);

    if (this.game.trump.gameOver) {
      this.game.stopCreateEnemies();
      cancelAnimationFrame(this.frame);
      this.renderGameOver(ctx);
    }
    this.addScore();
    this.getScore(ctx);
  }

  renderBackground(ctx) {
    const width = window.innerWidth - 20;
    const height = window.innerHeight - 20;
    this.bgPos -= this.speed;
    this.bg2Pos -= this.speed;

    ctx.drawImage(this.background, this.bgPos, 0, width, height);
    ctx.drawImage(this.backgroundFlipped, this.bg2Pos, 0, width, height);

    if (this.bg2Pos < -width) this.bg2Pos = -this.bg2Pos;
    if (this.bgPos < -width) this.bgPos = -this.bgPos;
  }

  renderGameOver(ctx) {
    this.gameOverSound.play();
    const gameOver = new _game_over__WEBPACK_IMPORTED_MODULE_1__["default"](this.score, this.game);
    this.speed = 0;
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    const animateCallBack = () => {
      this.frame = requestAnimationFrame(animateCallBack);
      this.renderBackground(ctx);

      for (let i = this.game.enemies.length - 1; i >= 0; i -= 1) {
        this.game.enemies[i].draw(ctx);
      }
      gameOver.draw(ctx);
    };
    animateCallBack();
  }

  addScore() {
    const enemy = this.game.enemies[0];

    if (enemy.defeated) {
      this.score += 1;
      this.pointSound.play();
      enemy.defeated = null;
    }

    if (this.game.trump.pos[0] > (enemy.x + enemy.size) && enemy.defeated !== null) {
      enemy.defeated = true;
    }
  }

  getScore(ctx) {
    ctx.font = '60px Electrolize';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 10;
    ctx.fillStyle = 'white';
    ctx.strokeText(this.score, window.innerWidth / 2 - 60, 100);
    ctx.fillText(this.score, window.innerWidth / 2 - 60, 100);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (GameView);


/***/ }),

/***/ "./lib/ready_screen.js":
/*!*****************************!*\
  !*** ./lib/ready_screen.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ReadyScreen {
  constructor(options) {
    this.canvasEl = options.canvasEl;
    this.game = options.game;
    this.image = new Image();
    this.image.src = './assets/message.png';
  }

  draw() {
    const ctx = this.canvasEl.getContext('2d');
    ctx.drawImage(this.image, window.innerWidth / 2 - 150, window.innerHeight / 3 - 100, 270, 120);
    ctx.font = '40px Electrolize';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 8;
    ctx.fillStyle = 'white';
    ctx.strokeText('Click to start', window.innerWidth / 2 - 140, window.innerHeight / 1.8);
    ctx.fillText('Click to start', window.innerWidth / 2 - 140, window.innerHeight / 1.8);
    ctx.strokeText('Press space to jump', window.innerWidth / 2 - 210, window.innerHeight / 1.55);
    ctx.fillText('Press space to jump', window.innerWidth / 2 - 210, window.innerHeight / 1.55);
    this.game.trump.draw(ctx);
    this.game.trump.move();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ReadyScreen);


/***/ }),

/***/ "./lib/start_screen.js":
/*!*****************************!*\
  !*** ./lib/start_screen.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class StartScreen {
  draw(ctx) {
    ctx.font = '80px Electrolize';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 9;
    ctx.strokeText('Trumpy bird', window.innerWidth / 2 - 250, window.innerHeight / 3 - 80);
    ctx.fillStyle = 'white';
    ctx.fillText('Trumpy bird', window.innerWidth / 2 - 250, window.innerHeight / 3 - 80);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (StartScreen);


/***/ }),

/***/ "./lib/trump.js":
/*!**********************!*\
  !*** ./lib/trump.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Trump {
  constructor(options) {
    this.size = options.size;
    this.pos = options.pos;
    this.xPos = 0;
    this.moveCounter = 0;
    this.velocity = 0;
    this.gravity = 0.35;
    this.lift = 8;
    this.width = window.innerWidth - 20;
    this.height = window.innerHeight - 20;
    this.gameOver = false;
    this.trump = new Image();
    this.trumpDead = new Image();
    this.trump.src = './assets/trump_run.png';
    this.trumpDead.src = './assets/trump-dead.png';
  }

  draw(ctx) {
    ctx.drawImage(
      this.trump,
      this.xPos,
      256,
      256,
      256,
      this.pos[0],
      this.pos[1],
      this.size,
      this.size,
    );
  }

  drawStart(ctx) {
    const height = this.height / 5;
    const width = this.width / 6;
    ctx.drawImage(
      this.trump,
      this.xPos,
      0,
      256,
      256,
      this.width / 2 - 135,
      this.height / 2 - height + 10,
      width,
      height,
    );
  }

  drawDead(ctx) {
    ctx.drawImage(this.trumpDead, this.pos[0] - 20, this.pos[1] + 20, this.size, this.size);
  }

  move() {
    this.moveCounter += 1;

    if (this.moveCounter % 5 === 0) {
      if (this.xPos === 1280) {
        this.xPos = 0;
      } else {
        this.xPos += 256;
      }
    }
  }

  jump() {
    if (this.gameOver) {
      return this.velocity;
    }
    this.velocity = this.lift;
    return this.velocity;
  }

  fall() {
    this.velocity -= this.gravity;
    this.pos[1] -= this.velocity;

    if (this.pos[1] > this.height - this.size) {
      this.pos[1] = this.height - this.size;
      this.velocity = 0;
      this.gameOver = true;
    } else if (this.pos[1] < 0) {
      this.pos[1] = 0;
      this.velocity = 0;
    }
  }

  collided(enemy) {
    const enemyTop = enemy.top * enemy.size;
    const enemyBot = enemy.bottom * enemy.size;
    if (this.pos[0] + this.size - 25 > enemy.x && this.pos[0] + 100 < enemy.x + enemy.size) {
      if (this.pos[1] + this.size - 20 > this.height - enemyBot
        || this.pos[1] + 20 < enemyTop) {
        this.gameOver = true;
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Trump);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map