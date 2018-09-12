class GameOver {
  constructor(score, game) {
    this.score = score;
    this.game = game;
    this.image = new Image();
    this.image.src = "./assets/gameover.png";
  }

  draw(ctx) {
    ctx.drawImage(this.image, window.innerWidth / 2 - 150, window.innerHeight/4 - 100, 250, 100)

    this.renderScore(ctx);

    this.game.trump.drawDead(ctx);
    this.game.trump.fall(window);
    this.renderResetGame();
  }

  renderScore(ctx) {
    ctx.font = "60px Electrolize";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.fillStyle = "white";
    ctx.strokeText("Final score:", window.innerWidth / 2 - 230, window.innerHeight/2.5)
    ctx.fillText("Final score:", window.innerWidth / 2 - 230, window.innerHeight/2.5)
    ctx.font = "80px Electrolize";
    ctx.strokeText(this.score, window.innerWidth / 2 + 100, window.innerHeight/2.5)
    ctx.fillText(this.score, window.innerWidth / 2 + 100, window.innerHeight/2.5)
  }

  renderResetGame() {
    let resetGame = document.getElementById('start-button');
    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("hide")
      buttons[i].setAttribute("class", "show");
    };

    resetGame.onclick = (e) => {
      if (e.target === resetGame) {
        window.location.reload(true);
      }
    }
  }
}

export default GameOver;