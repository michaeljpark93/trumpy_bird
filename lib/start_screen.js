class StartScreen {
    constructor() {

    }

    draw(ctx) {
        ctx.font = "60px Electrolize";
        ctx.fillStyle = "white";
        ctx.strokeText("Trumpy bird", window.innerWidth / 2 - 60, window.innerHeight/3)
    }

}

export default StartScreen;