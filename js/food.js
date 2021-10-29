import { onSnake, expandSnake } from 'js/snake.js';
import { randomGridPosition } from 'js/grid.js';
import {updateScore} from 'js/score.js';

// Food initial position.
let food = { x: 10, y: 1 };

// Snake expansion rate (1 = 1 cell).
let EXPANSION_RATE = 1

// Function to expand the snake if it reaches the food.
export function update() {
    if(onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
        updateScore()
    }
}

// Function to draw the food on the screen.
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
    }

// Function to get a random position for the next food spawn.
function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}