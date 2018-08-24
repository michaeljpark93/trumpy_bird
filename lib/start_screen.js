class StartScreen {
    draw(ctx) {
        ctx.font = "80px Electrolize";
        ctx.strokeStyle = "black"
        ctx.lineWidth = 8;
        ctx.strokeText("Trumpy bird", window.innerWidth / 2 - 250, window.innerHeight/3 - 80)
        ctx.fillStyle = "white";
        ctx.fillText("Trumpy bird", window.innerWidth / 2 - 250, window.innerHeight/3 - 80)
    }
}

export default StartScreen;