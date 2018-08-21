import Light from './light.js';

class Environment {
    constructor(DIM_X = 1000, DIM_Y = 1000) {
        this.DIM_X = DIM_X;
        this.DIM_Y = DIM_Y;
        this.lights = [];
    }

    createLight() {
        const pos = [500, 500];
        const radius = 40;
        const color = 'red'
        const options = { pos, radius, color }

        let newLight = new Light(options);
        this.lights.push(newLight);
        return newLight;
    }

    draw(ctx) {
        const screenWidth = document.documentElement.clientWidth;
        const screenHeight = document.documentElement.clientHeight;
        ctx.clearRect(0, 0, screenWidth, screenHeight);

        this.lights.forEach(light => {
            light.draw(ctx)
        });
    }
}

export default Environment;