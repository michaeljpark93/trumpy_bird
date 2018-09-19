class Enemy {
  constructor(options) {
    this.size = 110;
    [this.top, this.bottom] = options.topBot;
    [this.x, this.y] = options.pos;
    this.speed = options.speed;
    this.defeated = false;
    this.height = window.innerHeight - 20;
    this.enemy1 = new Image();
    this.enemy1.src = './assets/1.png';
    this.enemy2 = new Image();
    this.enemy2.src = './assets/2.png';
    this.enemy3 = new Image();
    this.enemy3.src = './assets/3.png';
    this.enemy4 = new Image();
    this.enemy4.src = './assets/4.png';
    this.enemies = [this.enemy1, this.enemy2, this.enemy3, this.enemy4];
    this.color = this.enemies[options.color];
  }

  draw(ctx) {
    this.generateTop(ctx);
    this.generateBot(ctx);
  }

  generateTop(ctx) {
    for (let i = 0; i < this.top; i += 1) {
      const yPos = i * this.size;
      ctx.drawImage(this.color, this.x, yPos, this.size, this.size);
    }
  }

  generateBot(ctx) {
    for (let i = 0; i < this.bottom; i += 1) {
      const yPos = i * this.size;
      ctx.drawImage(this.color, this.x, this.height - this.size - yPos, this.size, 110);
    }
  }

  update(speed) {
    this.x -= speed;
  }

  beaten() {
    if (this.x < -this.size) return true;
    return false;
  }
}

export default Enemy;
