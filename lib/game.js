import Trump from './trump.js';
import Enemy from './enemy.js';

class Game {
    constructor(window) {
        this.window = window
        this.speed = 5;
        this.score = 0;
        this.xPos = 0
        this.x2Pos = this.window.innerWidth
        this.trump = this.createTrump();
        this.enemies = []
        this.createEnemies();
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

            for (let i = this.enemies.length - 1; i >= 0; i--) {
                this.trump.collided(this.enemies[i], this.window) 

                this.enemies[i].draw(ctx, this.trump.highlight);
                this.enemies[i].update(this.speed);

                if (this.enemies[i].beaten()) {
                    this.enemies.splice(i, 1);
                    this.score++;
                }
            }
            if (this.trump.gameOver) {
                cancelAnimationFrame(start);
            }

            this.getScore(ctx);

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

    createEnemies() {
        setInterval(() => this.createEnemy(), 2000)
    }

    createEnemy() {
        let pos = [this.window.innerWidth, this.window.innerHeight]
        let speed = this.speed;
        let nEnemies = 5
        let options = {pos, speed, nEnemies}
        this.enemies.push(new Enemy(options));
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

    getScore(ctx) {
        ctx.font = "60px Electrolize";
        ctx.fillStyle = "white";
        ctx.fillText(this.score, this.window.innerWidth / 2 - 60, 100)
    }
}

export default Game;