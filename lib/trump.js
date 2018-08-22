class Trump {
    constructor(options) {
        this.pos = options.pos;
        this.size = options.size;
        this.screen = options.screen;
        this.velocity = 0;
        this.gravity = 0.5;
        this.lift = 18;
        this.gameOver = false;
        this.trump = new Image();
    }

    draw(ctx) {
        this.trump.onload = () => {
            ctx.drawImage(this.trump, this.pos[0], this.pos[1], this.size[0], this.size[1]);   
        }
        this.trump.src = "assets/trump.png";
    }

    jump() {
        this.velocity -= this.lift;
    }

    fall() {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.pos[1] += this.velocity;

        if (this.pos[1] > this.screen[1]) {
            this.pos[1] = this.screen[1]
        } else if (this.pos[1] < 0) {
            this.pos[1] = 0
        }
            this.velocity = 0
    }
}

export default Trump;