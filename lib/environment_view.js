class EnvironmentView {
    constructor(environment, canvasEl, pos, window) {
        this.environment = environment;
        this.canvasEl = canvasEl;
        this.pos = pos
        this.window = window;
        this.ctx = this.canvasEl.getContext('2d')
        this.background = new Image();
        this.render();
    }

    start() {
        const animateCallback = () => {
            this.render()
            this.environment.draw(this.ctx);
            requestAnimationFrame(animateCallback);
        };
        animateCallback();
    }

    render(ctx) {
        this.background.onload = () => {
            this.ctx.drawImage(this.background, this.pos[0], this.pos[1], this.screen[0], this.screen[1])
        }
        this.background.src = "assets/77.jpg"
    }
}

export default EnvironmentView;