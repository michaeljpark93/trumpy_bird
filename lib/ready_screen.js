class ReadyScreen {
    constructor(options) {
        this.canvasEl = options.canvasEl;
        this.window = options.window;
        this.game = options.game;
        this.image = new Image();
        this.image.src = "assets/message.png";
    }

    draw() {
        let ctx = this.canvasEl.getContext('2d');
        ctx.drawImage(this.image, this.window.innerWidth / 2 - 150, this.window.innerHeight/3 - 100, 250, 120)
        ctx.font = "40px Electrolize";
        ctx.strokeStyle = "black"
        ctx.lineWidth = 8;
        ctx.strokeText("Click or press space to begin", window.innerWidth / 2 - 290, window.innerHeight/1.6)
        ctx.fillStyle = "white";
        ctx.fillText("Click or press space to begin", window.innerWidth / 2 - 290, window.innerHeight/1.6)
        this.game.trump.draw(ctx);
        this.game.trump.move();
    }
}

export default ReadyScreen;