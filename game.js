import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, resetSnakeHead } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';
import {score } from './score.js';
//import { updateScore} from './score.js';


let lastRenderTime = 0;
let gameOver = false
const gameBoard = document.getElementById('game-board')

// Boucle principale du jeu
function main(currentTime) {
    // Vérification que les conditions de jeu sont réunies, sinon écran Game Over
    if(gameOver) {
        if (confirm(`GAME OVER.\n\nCONGRATULATIONS\nYOUR SCORE WAS ${score}!\n\nPress OK to restart.`)) {
            document.location.reload();
        }
        return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    //console.log('Render')
    lastRenderTime = currentTime
    
    update()
    draw()
}

window.requestAnimationFrame(main);

function update() {
    updateSnake()
    updateFood()
    checkBorderCollision()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkBorderCollision(){
    if(outsideGrid(getSnakeHead())) {
        console.log(getSnakeHead())
        resetSnakeHead()
    }
}

function checkDeath() {
    gameOver = snakeIntersection()
}