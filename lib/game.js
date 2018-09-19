import Trump from './trump';
import Enemy from './enemy';
import StartScreen from './start_screen';

class Game {
  constructor() {
    this.screen = new StartScreen();
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
    const trump = new Trump({ size, pos });
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
    const enemy = new Enemy(options);
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

export default Game;
