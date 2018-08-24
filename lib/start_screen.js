class StartScreen {
    constructor() {

    }

    draw(ctx, window) {
        ctx.font = "60px Electrolize";
        ctx.fillStyle = "white";
        ctx.strokeText(, window.innerWidth / 2 - 60, 100)
    }
}

export default StartScreen;