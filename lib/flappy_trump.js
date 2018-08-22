import Game from './game.js';

let canvasEl = document.getElementById('canvas');

let game = new Game(window)
game.start(canvasEl);    


window.onkeyup = (e) => {
    if (e.keyCode == 32) game.callJump();
}

window.onclick = () => { game.callJump() }
