import Trump from './trump.js';

class Game {
    constructor(window) {
        this.window = window
        this.speed = 1;
        this.score = 0;
        this.trump = this.createTrump();
        this.background = new Image();
    }

    start(canvasEl) {
        const ctx = canvasEl.getContext('2d');
        canvasEl.width = this.window.innerWidth;
        canvasEl.height = this.window.innerHeight;

        const animateCallback = () => {
            this.createBackground(ctx);
            this.trump.draw(ctx);
            this.trump.fall(this.window);

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

    createBackground(ctx) {
        this.background.onload = () => {
            // console.log(this.window.innerHeight, this.window.innerWidth)
            ctx.drawImage(this.background, 0, 0, this.window.innerWidth, this.window.innerHeight);
        }
        this.background.src = "assets/77.jpg"
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