import Trump from './trump.js';
import Enemy from './enemy.js';
import StartScreen from './start_screen.js';

class Game {
    constructor(window) {
        this.screen = new StartScreen();
        this.gameScreen = 0;
        this.window = window;
        this.speed = 7;
        this.trump = this.createTrump();
        this.enemies = [];
    }

    createTrump() {
        const size = this.window.innerHeight/6;
        const pos = [this.window.innerWidth/5, this.window.innerHeight/2 - size];
        let trump = new Trump({ size, pos , window});
        return trump;
    }

    createEnemies() {
        setInterval(() => this.createEnemy(), 1400);
    }

    createEnemy() {
        let pos = [this.window.innerWidth, this.window.innerHeight];
        let speed = this.speed;
        let nEnemies = 5;
        let topBot = this.generateEnemyPosition();
        let options = {pos, speed, nEnemies, topBot};
        let enemy = new Enemy(options)
        console.log(enemy);
        this.enemies.push(enemy);
    }

    generateEnemyPosition() {
        let height = this.window.innerHeight - 200;
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