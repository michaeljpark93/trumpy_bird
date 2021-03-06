import StartScreen from './start_screen';
import GameOver from './game_over';

class GameView {
  constructor(options) {
    this.startScreen = new StartScreen();
    this.readyScreen = options.readyScreen;
    this.game = options.game;
    this.canvasEl = options.canvasEl;
    this.gameView = 0;
    this.score = 0;
    this.speed = 6.5;
    this.sound = true;
    this.bgPos = 0;
    this.bg2Pos = window.innerWidth - 20;
    this.background = new Image();
    this.backgroundFlipped = new Image();
    this.background.src = './assets/bg5.jpg';
    this.backgroundFlipped.src = './assets/bg5-flipped.jpg';
    this.gameOverSound = new Audio('./assets/audio/die.wav');
    this.pointSound = new Audio('./assets/audio/kaching.m4a');
    this.backgroundMusic = new Audio('./assets/audio/background.m4a');
    // this.jumpSound = new Audio('./assets/audio/jump.m4a');
    [this.restartGame] = document.getElementsByClassName('start');
  }

  start() {
    const ctx = this.canvasEl.getContext('2d');

    const animateCallback = () => {
      this.frame = requestAnimationFrame(animateCallback);
      this.renderBackground(ctx);

      switch (this.gameView) {
        case 1:
          this.readyScreen.draw();
          this.soundHandler();
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

  soundHandler() {
    if (!this.sound) this.backgroundMusic.pause();
  }

  gameStart() {
    this.gameView = 1;
    if (this.sound) {
      this.backgroundMusic.volume = 0.1;
      this.backgroundMusic.play();
    }
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
    this.game.trump.jump();
  }

  renderPlayScreen(ctx) {
    for (let i = this.game.enemies.length - 1; i >= 0; i -= 1) {
      this.game.trump.collided(this.game.enemies[0], window);

      this.game.enemies[i].draw(ctx);
      this.game.enemies[i].update(this.speed);

      if (this.game.enemies.length > 0 && this.game.enemies[i].beaten()) {
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
    if (this.sound) {
      this.gameOverSound.volume = 0.1;
      this.gameOverSound.play();
    }
    const gameOver = new GameOver(this.score, this.game);
    this.speed = 0;

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

    if (enemy && enemy.defeated) {
      this.score += 1;
      if (this.sound) {
        this.pointSound.volume = 0.12;
        this.pointSound.play();
      }
      enemy.defeated = null;
    }

    if (enemy && this.game.trump.pos[0] > (enemy.x + enemy.size - 10) && enemy.defeated !== null) {
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

export default GameView;
