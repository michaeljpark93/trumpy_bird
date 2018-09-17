import Trump from './trump.js';
import Enemy from './enemy.js';
import StartScreen from './start_screen.js';

class Game {
  constructor() {
    this.screen = new StartScreen();
    this.gameScreen = 0;
    this.trump = this.createTrump();
    this.enemies = [];
    this.width = window.innerWidth - 20;
    this.height = window.innerHeight - 20;
  }

  createTrump() {
    const size = this.height / 6;
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
    const options = { pos, speed, topBot };
    const enemy = new Enemy(options);
    this.enemies.push(enemy);
  }

  generateEnemyPosition() {
    const height = this.height - 200;
    const ratios = [0.25, 0.33, 0.5, 0.67, 0.75];
    const ratio = ratios[Math.floor(Math.random() * ratios.length)];
    const topBot = [height * ratio, height * (1 - ratio)];
    return topBot;
  }

  callJump() {
    this.trump.jump();
  }
}

export default Game;
