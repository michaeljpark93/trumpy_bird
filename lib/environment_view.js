class EnvironmentView {
    constructor(environment, ctx) {
        this.environment = environment;
        this.ctx = ctx;
        this.render();
        this.background = new Image();
    }

    start(){
        this.environment.draw(this.ctx);
    }

    render(ctx) {
        this.x -= this.speed;

        ctx.drawImage(this.background, this.x, this.y);

        if (this.x <= -this.background.width) {
            this.x = this.DIM_X;
        }
    }

    // start() {
    //     const animateCallback = () => {
    //         this.environment.draw(this.ctx);
    //         requestAnimationFrame(animateCallback);
    //     };
    //     animateCallback();
    // }

    // animate() {
    //     requestAnimationFrame(this.animate);
    //     ctx.clearReact
    // }
}

export default EnvironmentView;