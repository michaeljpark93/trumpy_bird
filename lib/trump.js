class Trump {
    constructor(options) {
        this.counter = Date.now();
        this.fallingCounter = Date.now();
        this.fps = 30;
        this.state = 0;
        this.velocity = 2,
        this.force = 0.15;
        this.pos = options.pos;
        this.size = options.size;
        this.gameOver = false;
        this.trump = new Image();
    }

    draw(ctx) {
        this.trump.onload = () => {
            ctx.drawImage(this.trump, this.DIM_X/2, this.DIM_Y/2, this.size[0], this.size[1]);   
        }
    
        this.trump.src = "assets/trump.png";
    }

    jump {
        this.velocity = -7;
    }

    fall {
        const now = Date.now();
        if (now - this.fallingCounter > 1000 / fps) {
            if (this.velocity < 8) {
                this.velocity += this.force};
            this.pos[1] += this.velocity;
        }
    }

    hasCollided {
        let trumpX = this.pos[0] + this.size[0],
        let trumpTopY = this.pos[1],
        let trumpBotY = this.pos[1] + this.size[1];

        let enemyX = enemies[nextEnemyId].enemyDown.x + 40,
            enemyLookingDownY = enemies[nextEnemyId].enemyDown.y + enemies[nextEnemyId].enemyDown.img.height,
            enemyLookingUpY = enemies[nextEnemyId].enemyUp.y,
            enemyWidth = enemies[nextEnemyId].enemyDown.img.width;

        if (trumpX > enemyX && trumpX < enemyX + enemyWidth - 40) {
            if (trumpTopY < enemyLookingDownY || trumpBotY > enemyLookingUpY)
                this.hasCollided = true;
        }

        if (trumpBotY < 0 || trumpTopY > c.height) {
            this.hasCollided = true;
        }

        return this.hasCollided;
    }

    getNextFrame {
        let now = Date.now();
        if (now - this.counter > 1000 / fps) {
            this.counter = now;
            this.state++;
            if (this.state > 2) this.state = 0;
        }
        return this.state;
    }
}