class Trump {
    constructor(options) {
        this.size = options.size;
        this.pos = options.pos;
        this.radius = 35;
        this.velocity = 0;
        this.gravity = .45;
        this.lift = 9;
        this.gameOver = false;
        this.trump = new Image();
        this.trump.src = "assets/trump.png";
    }

    draw(ctx) {
            ctx.drawImage(this.trump, this.pos[0], this.pos[1], this.size[0], this.size[1]);   
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
            this.gameOver = true;
        } else if (this.pos[1] < 0) {
            this.pos[1] = 0;
            this.velocity = 0;
        }       
    }

    collided(enemy, window) {
        if (this.pos[0] + this.size[0] + 100 > enemy.x && this.pos[0] + 100 < enemy.x + enemy.width) {
            if (this.pos[1] < enemy.top || this.pos[1] + this.size[1] -10 > window.innerHeight - enemy.bottom) {
                this.gameOver = true;
            }
        }
        return true;
    }
}

export default Trump;