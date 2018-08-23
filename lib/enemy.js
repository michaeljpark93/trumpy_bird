class Enemy {
    constructor(options) {
        this.top = 200
        this.bottom = 200
        this.width = 100
        this.x = options.pos[0];
        this.y = options.pos[1];
        this.speed = options.speed;
        this.image = new Image();
        this.imageDown = new Image();
    }

    draw(ctx, highlight) {
        if (highlight) {
            ctx.fillStyle="#FF0000";
        } else {
            ctx.fillStyle="#333300";
        }
        ctx.fillRect(this.x -100, 0, this.width, this.top);
        ctx.fillRect(this.x -100, this.y-this.bottom, this.width, this.bottom);
        // this.image.onload = () => {
        //     ctx.drawImage(this.image, this.pos[0], 250, 100, 100)
        // }
        // this.imageDown.onload = () => {
        //     ctx.drawImage(this.imageDown, this.pos[0], this.pos[1], 100, 100)
        // }

        // this.image.src = 'assets/brick.png';
        // this.imageDown.src = 'assets/pipe-down.png';
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