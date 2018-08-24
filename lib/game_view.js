import StartScreen from './start_screen.js';
import GameOver from './game_over.js';
import { debug } from 'util';

class GameView {
    constructor(options) {
        this.startScreen = new StartScreen();
        this.readyScreen = options.readyScreen;
        this.game = options.game;
        this.window = options.window;
        this.gameView = 0;
        this.speed = 7;
        this.score = 0;
        this.xPos = 0;
        this.x2Pos = this.window.innerWidth;
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
            this.game.trump.collided(this.game.enemies[0], this.window);

            this.game.enemies[i].draw(ctx);
            this.game.enemies[i].update(this.speed);

            if (this.game.enemies[i].beaten()) {
                this.game.enemies.splice(i, 1);
            }
        }

        this.game.trump.draw(ctx);
        this.game.trump.move();
        this.game.trump.fall(this.window);

        if (this.game.trump.gameOver) {
            cancelAnimationFrame(this.frame);
        }
        this.addScore();
        this.getScore(ctx);
    }

    renderBackground(ctx) {
        this.xPos -= this.speed;
        this.x2Pos -= this.speed;

        ctx.drawImage(this.background, this.xPos, 0, this.window.innerWidth, this.window.innerHeight);
        ctx.drawImage(this.backgroundFlipped, this.x2Pos, 0, this.window.innerWidth, this.window.innerHeight);

        if (this.x2Pos < -this.window.innerWidth) this.x2Pos = -this.x2Pos - 15;
        if (this.xPos < -this.window.innerWidth) this.xPos = -this.xPos - 15;
    }

    renderGameOver(ctx) {
        let gameOver = new GameOver(this.score, this.game, this.window);
        gameOver.draw(ctx);
    }

    addScore() {
        console.log(this.game.enemies)
        if (this.game.trump.pos[0] > (this.game.enemies[0].x - this.game.enemies[0].width) && 
        this.game.trump.pos[0] < (this.game.enemies[0].x - this.game.enemies[0].width) + 5) this.score++;
    }

    getScore(ctx) {
        ctx.font = "60px Electrolize";
        ctx.fillStyle = "white";
        ctx.fillText(this.score, this.window.innerWidth / 2 - 60, 100)
    }
}

export default GameView;