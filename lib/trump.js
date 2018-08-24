class Trump {
    constructor(options) {
        this.size = options.size;
        this.pos = options.pos;
        this.window = options.window
        this.xPos = 0;
        this.moveCounter = 0;
        this.radius = 35;
        this.velocity = 0;
        this.gravity = .45;
        this.lift = 9;
        this.gameOver = false;
        this.trump = new Image();
        this.trump.src = "assets/trump_run.png";
    }

    draw(ctx) {
        ctx.drawImage(this.trump, this.xPos, 256, 256, 256, this.pos[0], this.pos[1], this.size, this.size);   
    }

    drawStart(ctx) {
        let height = this.window.innerHeight/5;
        let width = this.window.innerWidth/6;
        ctx.drawImage(this.trump, this.xPos, 0, 256, 256, this.window.innerWidth/2 - 135, this.window.innerHeight/2 - height + 10, width, height);
    }

    move() {
        this.mCounter();
        if (this.moveCounter % 5 == 0) {
            if (this.xPos == 1280) {
                this.xPos = 0
            } else {
                this.xPos += 256;
            }
        }
    }

    mCounter() {
        this.moveCounter++
    }

    jump() {
        this.velocity = this.lift;
    }

    fall(window) {
        this.velocity -= this.gravity;
        this.pos[1] -= this.velocity;

        if (this.pos[1] > window.innerHeight - this.size) {
            this.pos[1] = window.innerHeight - this.size;
            this.velocity = 0;
            this.gameOver = true;
        } else if (this.pos[1] < 0) {
            this.pos[1] = 0;
            this.velocity = 0;
        }       
    }

    collided(enemy, window) {
        if (this.pos[0] + this.size + 180 > enemy.x && 
            this.pos[0] + 150 < enemy.x + enemy.width) {
            if (this.pos[1] + this.size - 10 > window.innerHeight - enemy.bottom ||
                this.pos[1] < enemy.top - 20) {
                this.gameOver = true;
            }
        }
    }
}

export default Trump;