import Light from './light.js';
import Balloon from './balloon.js';

class Environment {
    constructor(DIM_X = 1000, DIM_Y = 1000) {
        this.DIM_X = DIM_X;
        this.DIM_Y = DIM_Y;
        this.lights = [];
        this.balloonMan = new Balloon();
    }

    createLight() {
        const radius = 15;
        const color = 'red'
        const options = { radius, color }

        let newLight = new Light(options);
        this.lights.push(newLight);
        return newLight;
    }

    draw(ctx) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        ctx.clearRect(0, 0, screenWidth, screenHeight);
        this.balloonMan.draw(ctx);

        // this.lights.forEach(light => light.draw());
    }
}

export default Environment;