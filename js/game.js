import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, resetSnakeHead } from 'js/snake.js';
import { update as updateFood, draw as drawFood } from 'js/food.js';
import { outsideGrid } from 'js/grid.js';
import {score } from 'js/score.js';
//import { updateScore} from './score.js';


let lastRenderTime = 0;
let gameOver = false

const gameBoard = document.getElementById('game-board')

// Game main loop
function main(currentTime) {
    // Start game or Game over screen
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
    checkDeath()
    borderCollision()
    // drawBorders()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}


function checkDeath() {
    gameOver = snakeIntersection()
}

let bordersToggle = true;

export function borderCollision(){
    if(outsideGrid(getSnakeHead()) && bordersToggle) {
        gameOver = bordersToggle
    } else {
        resetSnakeHead()
    }
}
/*
const borderCells = [{x: 12, y: 13}]

function drawBorders(gameBoard){
    if (bordersToggle) {
        borderCells.forEach(segment => {
            const borderElement = document.createElement('div')
            borderElement.style.gridRowStart = segment.y
            borderElement.style.gridColumnStart = segment.x
            borderElement.classList.add('border')
            gameBoard.appendChild(borderElement)
            })
    }
    
    }
}
*/