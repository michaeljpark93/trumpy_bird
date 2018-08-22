import Trump from './trump.js';

class Environment {
    constructor(pos, speed) {
        this.DIM_X = window.clientWidth;
        this.DIM_Y = window.clientWidth;
        this.x = pos[0];
        this.y = pos[1];
        this.speed = speed || 1
        this.score = 0;
        this.trump = this.createTrump();
    }

    draw(ctx) {
        this.trump.draw(ctx);
        // ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
        this.animate();
    }

    animate() {
        this.trump.fall();

        window.onkeyup = (e) => {
            if (e.keyCode == 32) this.trump.jump();
        }
        window.onclick = () => {
            this.trump.jump();
        }
    }

    createTrump() {
        const size = [75, 75];
        const pos = [this.DIM_X/4, this.DIM_Y/2 - size[1]];
        const screen = [this.DIM_X, this.DIM_Y];
        const trump = new Trump({ pos, size, screen });
        return trump;
    }

    incrementScore() {
        this.score ++;
    }

    getScore() {
        return this.score;
    }

}

export default Environment;