import StartScreen from './start_screen.js';
import GameOver from './game_over.js';

class GameView {
    constructor(options) {
        this.startScreen = new StartScreen();
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
        let gameOver = new GameOver(this.score, this.game);
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

export default GameView;