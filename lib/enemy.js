class Enemy {
    constructor(options) {
        this.nEnemies = options.nEnemies;
        this.pos = options.pos
        this.image = new Image();
        this.imageDown = new Image();
        this.enemies = [];
    }

    draw(ctx) {
        this.image.onload = () => {
            ctx.drawImage(this.image, this.pos[0], 250, 100, 100)
        }
        this.imageDown.onload = () => {
            ctx.drawImage(this.imageDown, this.pos[0], this.pos[1], 100, 100)
        }

        this.image.src = 'assets/brick.png';
        this.imageDown.src = 'assets/pipe-down.png';
    }

    // collided(pos) {
    //     if ()
    // }


}

export default Enemy;