class Enemy {
  constructor(options) {
    this.size = 110;
    [this.top, this.bottom] = options.topBot;
    [this.x, this.y] = options.pos;
    this.speed = options.speed;
    this.defeated = false;
    this.height = window.innerHeight - 20;
    this.enemy = new Image();
    this.enemy.src = './assets/1.png';
  }

  draw(ctx) {
    this.generateTop(ctx);
    this.generateBot(ctx);
  }

  generateTop(ctx) {
    for (let i = 0; i < this.top; i += 1) {
      const yPos = i * this.size;
      ctx.drawImage(this.enemy, this.x, yPos, this.size, this.size);
    }
  }

  generateBot(ctx) {
    for (let i = 0; i < this.bottom; i += 1) {
      const yPos = i * this.size;
      ctx.drawImage(this.enemy, this.x, this.height - this.size - yPos, this.size, 110);
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
