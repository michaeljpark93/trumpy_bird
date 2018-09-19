class ReadyScreen {
  constructor(options) {
    this.canvasEl = options.canvasEl;
    this.game = options.game;
    this.image = new Image();
    this.image.src = './assets/message.png';
  }

  draw() {
    const ctx = this.canvasEl.getContext('2d');
    ctx.drawImage(this.image, window.innerWidth / 2 - 150, window.innerHeight / 3 - 100, 270, 120);
    ctx.font = '40px Electrolize';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 8;
    ctx.fillStyle = 'white';
    ctx.strokeText('Press Space or', window.innerWidth / 2 - 155, window.innerHeight / 1.8);
    ctx.fillText('Press Space or', window.innerWidth / 2 - 155, window.innerHeight / 1.8);
    ctx.strokeText('Click to jump', window.innerWidth / 2 - 140, window.innerHeight / 1.55);
    ctx.fillText('Click to jump', window.innerWidth / 2 - 140, window.innerHeight / 1.55);
    this.game.trump.draw(ctx);
    this.game.trump.move();
  }
}

export default ReadyScreen;
