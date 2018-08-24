class Enemy {
    constructor(options) {
        this.top = options.topBot[0];
        this.bottom = options.topBot[1];
        this.width = 150;
        this.x = options.pos[0];
        this.y = options.pos[1];
        this.speed = options.speed;
        this.image = new Image();
        this.smallImage = new Image();
        this.image.src = 'assets/brick2.png';
        this.smallImage.src = 'assets/brick.png';
    }

    draw(ctx) {
        if (this.top < this.y / 3) {
            ctx.drawImage(this.smallImage, this.x -100, 0, this.width, this.top);
        } else {
            ctx.drawImage(this.image, this.x -100, 0, this.width, this.top)
        }

        if (this.bottom < this.y / 3) {
            ctx.drawImage(this.smallImage, this.x -100, this.y - this.bottom, this.width, this.bottom)
        } else {
            ctx.drawImage(this.image, this.x -100, this.y - this.bottom, this.width, this.bottom)
        }
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