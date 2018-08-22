import Trump from './trump.js';
import Enemy from './enemy.js';
import { runInThisContext } from 'vm';

class Game {
    constructor(window) {
        this.window = window
        this.speed = 10;
        this.score = 0;
        this.xPos = 0
        this.x2Pos = this.window.innerWidth
        this.trump = this.createTrump();
        this.enemy = this.createEnemy();
        this.background = new Image();
        this.backgroundFlipped = new Image();
    }

    start(canvasEl) {
        let ctx = canvasEl.getContext('2d');
        canvasEl.width = this.window.innerWidth - 20;
        canvasEl.height = this.window.innerHeight - 20;
        
        const animateCallback = () => {

            this.renderBackground(ctx);
            this.trump.draw(ctx);
            this.trump.fall(this.window);

            this.enemy.draw(ctx);

            requestAnimationFrame(animateCallback);
        };
        animateCallback();
    }

    createTrump() {
        const size = [75, 75];
        const pos = [this.window.innerWidth/5, this.window.innerHeight/2 - size[1]];
        let trump = new Trump({ size, pos });
        return trump;
    }

    createEnemy() {
        let pos = [this.window.innerWidth-500, this.window.innerHeight-500]
        let nEnemies = 5
        let options = {pos, nEnemies}
        let enemy = new Enemy(options);
        return enemy;
    }

    renderBackground(ctx) {
        this.xPos -= this.speed;
        this.x2Pos -= this.speed;

        this.background.onload = () => {
            ctx.drawImage(this.background, this.xPos, 0, this.window.innerWidth, this.window.innerHeight);
        }

        this.backgroundFlipped.onload = () => {
            ctx.drawImage(this.backgroundFlipped, this.x2Pos, 0, this.window.innerWidth, this.window.innerHeight);
        }

        if (this.x2Pos < -this.window.innerWidth) this.x2Pos = -this.x2Pos - 15;
        if (this.xPos < -this.window.innerWidth) this.xPos = -this.xPos - 15;

        this.background.src = "assets/77.jpg"
        this.backgroundFlipped.src = "assets/77-flipped.jpg"
    }

    callJump() {
        this.trump.jump();
    }

    incrementScore() {
        this.score ++;
    }

    getScore() {
        return this.score;
    }
}

export default Game;