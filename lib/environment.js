import Trump from './trump.js';

class Environment {
    constructor(pos, window) {
        this.x = pos[0];
        this.y = pos[1];
        this.screen = screen;
        this.speed = 1
        this.score = 0;
        this.trump = this.createTrump();
    }

    draw(ctx) {
        this.trump.draw(ctx);
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
        const pos = [this.screen[0]/5, this.screen[1]/2 - size[1]]
        const screen = this.screen;
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