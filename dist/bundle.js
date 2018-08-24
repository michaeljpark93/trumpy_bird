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
        this.top = options.topBot[0];
        this.bottom = options.topBot[1];
        this.width = 130;
        this.x = options.pos[0];
        this.y = options.pos[1];
        this.speed = options.speed;
        this.image = new Image();
        this.imageTop = new Image();
        this.image.src = './assets/pipe-red.png';
        this.imageTop.src = './assets/pipe-red-flipped.png';
    }

    draw(ctx) {
        ctx.drawImage(this.imageTop, this.x, 0, this.width, this.top);
        ctx.drawImage(this.image, this.x, this.y - this.bottom, this.width, this.bottom);
    }

    update(speed) {
        this.x -= speed;
    }

    beaten() {
        if (this.x < -this.width) {
            return true;
        } else {
            return false;
        }
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
/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view.js */ "./lib/game_view.js");
/* harmony import */ var _ready_screen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ready_screen.js */ "./lib/ready_screen.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ "./lib/game.js");




let canvasEl = document.getElementById('canvas');
let startGame = document.getElementById('start-button');
// let readyScreenEl = document.getElementsByClassName('ready-screen');

let game = new _game_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
let options = { canvasEl, game };
let readyScreen = new _ready_screen_js__WEBPACK_IMPORTED_MODULE_1__["default"](options);

let gameViewOptions = { game, readyScreen };
let gameView = new _game_view_js__WEBPACK_IMPORTED_MODULE_0__["default"](gameViewOptions);
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

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trump_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trump.js */ "./lib/trump.js");
/* harmony import */ var _enemy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy.js */ "./lib/enemy.js");
/* harmony import */ var _start_screen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start_screen.js */ "./lib/start_screen.js");




class Game {
    constructor() {
        this.screen = new _start_screen_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.gameScreen = 0;
        this.speed = 7;
        this.trump = this.createTrump();
        this.enemies = [];
    }

    createTrump() {
        const size = window.innerHeight/6;
        const pos = [window.innerWidth/5, window.innerHeight/2 - size];
        let trump = new _trump_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ size, pos });
        return trump;
    }

    createEnemies() {
        this.interval = setInterval(() => this.createEnemy(), 1400);
    }

    stopCreateEnemies() {
        clearInterval(this.interval);
    }

    createEnemy() {
        let pos = [window.innerWidth, window.innerHeight];
        let speed = this.speed;
        let nEnemies = 5;
        let topBot = this.generateEnemyPosition();
        let options = {pos, speed, nEnemies, topBot};
        let enemy = new _enemy_js__WEBPACK_IMPORTED_MODULE_1__["default"](options)
        this.enemies.push(enemy);
    }

    generateEnemyPosition() {
        let height = window.innerHeight - 200;
        let ratios = [0.25, 0.33, 0.5, 0.67, 0.75];
        var ratio = ratios[Math.floor(Math.random()*ratios.length)];
        let topBot = [height * ratio, height * (1 - ratio)];
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
        this.image.src = "./assets/gameover.png";
    }

    draw(ctx) {
        ctx.drawImage(this.image, window.innerWidth / 2 - 150, window.innerHeight/4 - 100, 250, 100)

        this.renderScore(ctx);

        this.game.trump.drawDead(ctx);
        this.game.trump.fall(window);
        this.renderResetGame();
    }

    renderScore(ctx) {
        ctx.font = "60px Electrolize";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 10;
        ctx.fillStyle = "white";
        ctx.strokeText("Final score:", window.innerWidth / 2 - 230, window.innerHeight/2.5)
        ctx.fillText("Final score:", window.innerWidth / 2 - 230, window.innerHeight/2.5)
        ctx.font = "80px Electrolize";
        ctx.strokeText(this.score, window.innerWidth / 2 + 100, window.innerHeight/2.5)
        ctx.fillText(this.score, window.innerWidth / 2 + 100, window.innerHeight/2.5)
    }

    renderResetGame() {
        let resetGame = document.getElementById('start-button');
        let buttons = document.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("hide")
            buttons[i].setAttribute("class", "show");
        };

        resetGame.onclick = (e) => {
            if (e.target === resetGame) {
                window.location.reload(true);
            }
        }
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
/* harmony import */ var _start_screen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start_screen.js */ "./lib/start_screen.js");
/* harmony import */ var _game_over_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_over.js */ "./lib/game_over.js");



class GameView {
    constructor(options) {
        this.startScreen = new _start_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.readyScreen = options.readyScreen;
        this.game = options.game;
        this.gameView = 0;
        this.speed = 7;
        this.score = 0;
        this.xPos = 0;
        this.x2Pos = window.innerWidth;
        this.background = new Image();
        this.backgroundFlipped = new Image();
        this.background.src = "./assets/bg5.jpg";
        this.backgroundFlipped.src = "./assets/bg5-flipped.jpg";
    }

    start(canvasEl) {
        let ctx = canvasEl.getContext('2d');
        canvasEl.width = window.innerWidth - 20;
        canvasEl.height = window.innerHeight - 20;

        const animateCallback = () => {
            this.frame = requestAnimationFrame(animateCallback);
            this.renderBackground(ctx);

            switch(this.gameView) {
                case 0:
                    this.renderStartScreen(ctx);
                    break;
                case 1:
                    this.readyScreen.draw();
                    break;
                case 2:
                    this.renderPlayScreen(ctx);
                    break;
            }            
        };
        animateCallback();
    }

    gameStart() {
        this.gameView = 1;
    }

    renderStartScreen(ctx) {
        this.startScreen.draw(ctx);
        this.game.trump.drawStart(ctx);
        this.game.trump.move();
    }

    renderStartGame() {
        this.gameView = 2;
        this.game.createEnemies();
    }

    renderPlayScreen(ctx) {
        for (let i = this.game.enemies.length - 1; i >= 0; i--) {
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
        this.xPos -= this.speed;
        this.x2Pos -= this.speed;

        ctx.drawImage(this.background, this.xPos, 0, window.innerWidth, window.innerHeight);
        ctx.drawImage(this.backgroundFlipped, this.x2Pos, 0, window.innerWidth, window.innerHeight);

        if (this.x2Pos < -window.innerWidth) this.x2Pos = -this.x2Pos - 15;
        if (this.xPos < -window.innerWidth) this.xPos = -this.xPos - 15;
    }

    renderGameOver(ctx) {
        let gameOver = new _game_over_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.score, this.game);
        this.speed = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const animateCallBack = () => {
            this.frame = requestAnimationFrame(animateCallBack);
            this.renderBackground(ctx);

            for (let i = this.game.enemies.length - 1; i >= 0; i--) {
                this.game.enemies[i].draw(ctx);
            }
            gameOver.draw(ctx);
        }
        animateCallBack();
    }

    addScore() {
        if (this.game.trump.pos[0] > (this.game.enemies[0].x - this.game.enemies[0].width) && 
        this.game.trump.pos[0] < (this.game.enemies[0].x - this.game.enemies[0].width) + 5) this.score++;
    }

    getScore(ctx) {
        ctx.font = "60px Electrolize";
        ctx.fillStyle = "white";
        ctx.fillText(this.score, window.innerWidth / 2 - 60, 100)
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
        this.image.src = "./assets/message.png";
    }

    draw() {
        let ctx = this.canvasEl.getContext('2d');
        ctx.drawImage(this.image, window.innerWidth / 2 - 150, window.innerHeight/3 - 100, 270, 120);
        ctx.font = "40px Electrolize";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 8;
        ctx.fillStyle = "white";
        ctx.strokeText("Click to start", window.innerWidth / 2 - 140, window.innerHeight/1.8);
        ctx.fillText("Click to start", window.innerWidth / 2 - 140, window.innerHeight/1.8);
        ctx.strokeText("Press space to jump", window.innerWidth / 2 - 210, window.innerHeight/1.55);
        ctx.fillText("Press space to jump", window.innerWidth / 2 - 210, window.innerHeight/1.55);
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
        ctx.font = "80px Electrolize";
        ctx.strokeStyle = "black"
        ctx.lineWidth = 9;
        ctx.strokeText("Trumpy bird", window.innerWidth / 2 - 250, window.innerHeight/3 - 80)
        ctx.fillStyle = "white";
        ctx.fillText("Trumpy bird", window.innerWidth / 2 - 250, window.innerHeight/3 - 80)
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
        this.radius = 35;
        this.velocity = 0;
        this.gravity = .45;
        this.lift = 9;
        this.gameOver = false;
        this.trump = new Image();
        this.trumpDead = new Image();
        this.trump.src = "./assets/trump_run.png";
        this.trumpDead.src = "./assets/trump-dead.png";
    }

    draw(ctx) {
        ctx.drawImage(this.trump, this.xPos, 256, 256, 256, this.pos[0], this.pos[1], this.size, this.size);   
    }

    drawStart(ctx) {
        let height = window.innerHeight/5;
        let width = window.innerWidth/6;
        ctx.drawImage(this.trump, this.xPos, 0, 256, 256, 
            window.innerWidth/2 - 135, window.innerHeight/2 - height + 10, width, height);
    }

    drawDead(ctx) {
        ctx.drawImage(this.trumpDead, this.pos[0], this.pos[1], this.size, this.size); 
    }

    move() {
        this.mCounter();
        if (this.moveCounter % 5 == 0) {
            if (this.xPos == 1280) {
                this.xPos = 0;
            } else {
                this.xPos += 256;
            }
        }
    }

    mCounter() {
        this.moveCounter++;
    }

    jump() {
        this.velocity = this.lift;
    }

    fall(window) {
        this.velocity -= this.gravity;
        this.pos[1] -= this.velocity;

        if (this.pos[1] > window.innerHeight - this.size) {
            this.pos[1] = window.innerHeight - this.size;
            this.velocity = 0;
            this.gameOver = true;
        } else if (this.pos[1] < 0) {
            this.pos[1] = 0;
            this.velocity = 0;
        }       
    }

    collided(enemy, window) {
        if (this.pos[0] + this.size - 25 > enemy.x && 
            this.pos[0] + 100 < enemy.x + enemy.width) {
                if (this.pos[1] + this.size - 20 > window.innerHeight - enemy.bottom ||
                    this.pos[1] + 20 < enemy.top) {
                    this.gameOver = true;
            }
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Trump);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map