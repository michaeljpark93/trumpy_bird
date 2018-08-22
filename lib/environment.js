// import Light from './light.js';
// import Balloon from './balloon.js';

class Environment {
    constructor(pos, speed) {
        this.DIM_X = window.innerWidth;
        this.DIM_Y = window.innerHeight;
        this.x = pos[0];
        this.y = pos[1];
        this.speed = speed || 1
        this.score = 0;
    }

    draw(ctx) {
        // ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
        
        this.background.onload = () => {
            ctx.drawImage(this.background,0,0, window.innerWidth, window.innerHeight);
        }
        this.background.src = "assets/77.jpg";
    }

    incrementScore() {
        this.score ++;
    }

    getScore() {
        return this.score;
    }

}

export default Environment;