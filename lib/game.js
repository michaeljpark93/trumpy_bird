import Trump from './trump.js';
import Enemy from './enemy.js';

class Game {
    constructor(window) {
        this.window = window;
        this.speed = 7;
        this.score = 0;
        this.xPos = 0;
        this.x2Pos = this.window.innerWidth;
        this.trump = this.createTrump();
        this.enemies = [];
        this.createEnemy();
        this.createEnemies();
        this.background = new Image();
        this.backgroundFlipped = new Image();
        this.background.src = "assets/bg5.jpg";
        this.backgroundFlipped.src = "assets/bg5-flipped.jpg";
    }

    start(canvasEl) {
        let ctx = canvasEl.getContext('2d');
        canvasEl.width = this.window.innerWidth - 20;
        canvasEl.height = this.window.innerHeight - 20;
 
        const animateCallback = () => {
            this.frame = requestAnimationFrame(animateCallback);
            this.renderBackground(ctx);

            for (let i = this.enemies.length - 1; i >= 0; i--) {
                this.trump.collided(this.enemies[0], this.window);

                this.enemies[i].draw(ctx);
                this.enemies[i].update(this.speed);

                if (this.enemies[i].beaten()) {
                    this.enemies.splice(i, 1);
                }
            }

            this.trump.draw(ctx);
            this.trump.move();
            this.trump.fall(this.window);

            if (this.trump.gameOver) {
                // cancelAnimationFrame(this.frame);
            }
            this.addScore();
            this.getScore(ctx);
        };
        animateCallback();
    }

    createTrump() {
        const size = this.window.innerHeight/6;
        const pos = [this.window.innerWidth/5, this.window.innerHeight/2 - size];
        let trump = new Trump({ size, pos });
        return trump;
    }

    createEnemies() {
        setInterval(() => this.createEnemy(), 2000);
    }

    createEnemy() {
        let pos = [this.window.innerWidth, this.window.innerHeight];
        let speed = this.speed;
        let nEnemies = 5;
        let topBot = this.generateEnemyPosition();
        let options = {pos, speed, nEnemies, topBot};
        this.enemies.push(new Enemy(options));
    }

    generateEnemyPosition() {
        let height = this.window.innerHeight - 200;
        let ratios = [0.25, 0.33, 0.5, 0.67, 0.75];
        var ratio = ratios[Math.floor(Math.random()*ratios.length)];
        let topBot = [height * ratio, height * (1 - ratio)];
        return topBot;
    }

    renderBackground(ctx) {
        this.xPos -= this.speed;
        this.x2Pos -= this.speed;

        ctx.drawImage(this.background, this.xPos, 0, this.window.innerWidth, this.window.innerHeight);
        ctx.drawImage(this.backgroundFlipped, this.x2Pos, 0, this.window.innerWidth, this.window.innerHeight);

        if (this.x2Pos < -this.window.innerWidth) this.x2Pos = -this.x2Pos - 15;
        if (this.xPos < -this.window.innerWidth) this.xPos = -this.xPos - 15;
    }

    callJump() {
        this.trump.jump();
    }

    addScore() {
        if (this.trump.pos[0] > (this.enemies[0].x - this.enemies[0].width) && 
        this.trump.pos[0] < (this.enemies[0].x - this.enemies[0].width) + 10) this.score++;
    }

    getScore(ctx) {
        ctx.font = "60px Electrolize";
        ctx.fillStyle = "white";
        ctx.fillText(this.score, this.window.innerWidth / 2 - 60, 100)
    }
}

export default Game;