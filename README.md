# Trumpy Bird

[Link to Demo Game](https://michaeljpark93.github.io/trumpy_bird/)

## Overview
This rendition of the notorious game Flappy Bird, called Trumpy Bird, is a browser-based game created with JavaScript and HTML5 Canvas. The player controls Trump with the spacebar or click of the mouse to avoid colliding with all the obstacles and aiming to acheive a high score.

## Gameplay
![Gameplay](/assets/gameplay.gif)

### Collision Detection
```js
  collided(enemy) {
    const enemyTop = enemy.top * enemy.size;
    const enemyBot = enemy.bottom * enemy.size;
    if (this.pos[0] + this.size - 25 > enemy.x && this.pos[0] + 100 < enemy.x + enemy.size) {
      if (this.pos[1] + this.size - 20 > this.height - enemyBot
        || this.pos[1] + 20 < enemyTop) {
        this.gameOver = true;
      }
    }
  }
```
Whenever the Trump sprite collides with an obstacle the game will automatically end and trigger the game over screen.

### Custom Event Handling
```js
  const startGameFunction = (e) => {
    if (e.target === e.currentTarget) {
      startRV = true;
    }
    gameView.gameStart();

    if (startRV) {
      const buttons = document.getElementsByTagName('button');
      for (let i = 0; i < buttons.length; i += 1) {
        buttons[i].setAttribute('id', 'hide');
      }
      startGame.removeEventListener('click', startGameFunction, false);

      readyView.removeAttribute('id');
      readyView.addEventListener('click', readyViewHandler, false);
      document.addEventListener('keyup', readyViewHandler, false);
    }
  };
```
In order to accomodate click handlers for the same event key bindings custom handlers where required to delegate actions. 

## Architecture and Technologies
This project uses the following:
* Vanilla JS for game logic
* HTML5 canvas for DOM manipulation and display
* Webpack to bundle the scripts

Scripts:
* flappy_trump.js: entry file
* enemy.js: handle random generation of enemy color and position
* trump.js: handle Trump drawing and action animations
* game.js: handle overall game mechanics
* ready_screen.js: handle player ready screen display
* start_screen.js: handle player start screen display
* game_view.js: handle overall visuals of gameplay

Future Features
* Add more levels and increase difficulty as the game progresses
* Add a leader board that records all scores
