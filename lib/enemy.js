class Enemy {
  constructor(options) {
    this.width = 130;
    [this.top, this.bottom] = options.topBot;
    [this.x, this.y] = options.pos;
    this.speed = options.speed;
    this.image = new Image();
    this.imageTop = new Image();
    this.image.src = './assets/pipe-red.png';
    this.imageTop.src = './assets/pipe-red-flipped.png';
  }

  draw(ctx) {
    ctx.drawImage(this.imageTop, this.x, 0, this.width, this.top);
    ctx.drawImage(this.image, this.x, this.y - this.bottom, this.width, this.bottom);
  }

  update(speed) {
    this.x -= speed;
  }

  beaten() {
    if (this.x < -this.width) {
      return true;
    } return false;
  }
}

export default Enemy;
