class Trump {
    constructor(options) {
        this.size = options.size;
        this.pos = options.pos;
        this.velocity = 0;
        this.gravity = .45;
        this.lift = 10;
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
        this.velocity = this.lift;
    }

    fall(window) {
        this.velocity -= this.gravity;
        this.pos[1] -= this.velocity;

        if (this.pos[1] > window.innerHeight - this.size[1]) {
            this.pos[1] = window.innerHeight - this.size[1];
            this.velocity = 0;
        } else if (this.pos[1] < 0) {
            this.pos[1] = 0;
            this.velocity = 0;
        }
            
    }
}

export default Trump;