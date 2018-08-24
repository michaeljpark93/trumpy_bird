class GameOver {
    constructor(score, game, window) {
        this.score = score;
        this.game = game;
        this.window = window;
        this.image = new Image();
        this.image.src = "assets/gameover.png";
    }

    draw(ctx) {
        const animateCallBack = () => {
            this.frame = requestAnimationFrame(animateCallBack);
            ctx.drawImage(this.image, this.window.innerWidth / 2 - 150, this.window.innerHeight/3 - 100, 250, 120)

            this.game.trump.drawDead(ctx);
            this.game.trump.fall(this.window);
        }
        animateCallBack();
    }
}

export default GameOver;