class Enemy {
    constructor(options) {
        this.top = options.topBot[0];
        this.bottom = options.topBot[1];
        this.width = 150;
        this.x = options.pos[0];
        this.y = options.pos[1];
        this.speed = options.speed;
        this.image = new Image();
        this.image.src = 'assets/brick2.png';
    }

    draw(ctx) {
        // ctx.fillRect(this.x -100, 0, this.width, this.top);
        // ctx.fillRect(this.x -100, this.y-this.bottom, this.width, this.bottom);
        ctx.drawImage(this.image, this.x -100, 0, this.width, this.top)
        ctx.drawImage(this.image, this.x -100, this.y - this.bottom, this.width, this.bottom)
    }

    update(speed) {
        this.x -= speed;
    }

    beaten() {
        if (this.x < -this.width) {
            return true;
        } else {
            return false;
        }
    }
}

export default Enemy;