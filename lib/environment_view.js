class EnvironmentView {
    constructor(environment, ctx) {
        this.environment = environment;
        this.ctx = ctx;
    }

    start(){
        let background = new Image();
        background.onload = () => {
            this.ctx.drawImage(background,0,0, window.innerWidth, window.innerHeight);   
        }
        background.src = "assets/77.jpg";

        // this.environment.createLight();
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