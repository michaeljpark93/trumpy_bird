class EnvironmentView {
    constructor(environment, ctx, pos) {
        this.environment = environment;
        this.ctx = ctx;
        // this.render();
        this.pos = pos
        this.background = new Image();
    }

    start() {
        const animateCallback = () => {
            this.environment.draw(this.ctx);
            requestAnimationFrame(animateCallback);
        };
        animateCallback();
    }

    render(ctx) {
        this.background.onload = () => {
            ctx.drawImage(this.background, this.pos[0], this.pos[1]);
        }
        this.background.src = "assets/77.jpg"
    }
}

export default EnvironmentView;