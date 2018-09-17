class Trump {
  constructor(options) {
    this.size = options.size;
    this.pos = options.pos;
    this.xPos = 0;
    this.moveCounter = 0;
    this.velocity = 0;
    this.gravity = 0.4;
    this.lift = 8;
    this.width = window.innerWidth - 20;
    this.height = window.innerHeight - 20;
    this.gameOver = false;
    this.trump = new Image();
    this.trumpDead = new Image();
    this.trump.src = './assets/trump_run.png';
    this.trumpDead.src = './assets/trump-dead.png';
  }

  draw(ctx) {
    ctx.drawImage(
      this.trump,
      this.xPos,
      256,
      256,
      256,
      this.pos[0],
      this.pos[1],
      this.size,
      this.size,
    );
  }

  drawStart(ctx) {
    const height = this.height / 5;
    const width = this.width / 6;
    ctx.drawImage(
      this.trump,
      this.xPos,
      0,
      256,
      256,
      this.width / 2 - 135,
      this.height / 2 - height + 10,
      width,
      height,
    );
  }

  drawDead(ctx) {
    ctx.drawImage(this.trumpDead, this.pos[0], this.pos[1], this.size, this.size);
  }

  move() {
    this.moveCounter += 1;

    if (this.moveCounter % 5 === 0) {
      if (this.xPos === 1280) {
        this.xPos = 0;
      } else {
        this.xPos += 256;
      }
    }
  }

  jump() {
    if (this.gameOver) {
      return this.velocity;
    }
    this.velocity = this.lift;
  }

  fall() {
    this.velocity -= this.gravity;
    this.pos[1] -= this.velocity;

    if (this.pos[1] > this.height - this.size) {
      this.pos[1] = this.height - this.size;
      this.velocity = 0;
      this.gameOver = true;
    } else if (this.pos[1] < 0) {
      this.pos[1] = 0;
      this.velocity = 0;
    }
  }

  collided(enemy) {
    if (this.pos[0] + this.size - 25 > enemy.x && this.pos[0] + 100 < enemy.x + enemy.width) {
      if (this.pos[1] + this.size - 20 > this.height - enemy.bottom || this.pos[1] + 20 < enemy.top) {
        this.gameOver = true;
      }
    }
  }
}

export default Trump;
