import Game from './game.js';

let canvasEl = document.getElementById('canvas');
let startGame = document.getElementById('start-button');
let game = new Game(window);
game.start(canvasEl)

console.log(game)
startGame.addEventListener('click',() => game.gameStart());    

window.onkeyup = (e) => {
    if (e.keyCode == 32) game.callJump();
}

window.onclick = () => { game.callJump() }
