import Trump from './trump.js';
import Enemy from './enemy.js';
import StartScreen from './start_screen.js';

class Game {
    constructor() {
        this.screen = new StartScreen();
        this.gameScreen = 0;
        this.speed = 7;
        this.trump = this.createTrump();
        this.enemies = [];
    }

    createTrump() {
        const size = window.innerHeight/6;
        const pos = [window.innerWidth/5, window.innerHeight/2 - size];
        let trump = new Trump({ size, pos });
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
        let enemy = new Enemy(options)
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

export default Game;