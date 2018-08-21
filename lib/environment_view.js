class EnvironmentView {
    constructor(environment, ctx) {
        this.environment = environment;
        this.ctx = ctx;
    }

    start(){
        this.environment.createLight();
        this.environment.draw(this.ctx);
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