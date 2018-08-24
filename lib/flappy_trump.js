import Game from './game.js';


let startGame = document.getElementById('start-button');

let canvasEl = document.getElementById('canvas');

let game = new Game(window)
// startGame.addEventListener('click',() => game.start(canvasEl));    

game.start(canvasEl)
window.onkeyup = (e) => {
    if (e.keyCode == 32) game.callJump();
}

window.onclick = () => { game.callJump() }
