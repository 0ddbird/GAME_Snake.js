import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';
import {updateScore} from './score.js';

// Position initiale de la nourriture
let food = { x: 10, y: 1 };

// Taux d'allongement du serpent
let EXPANSION_RATE = 1

// Fonction pour déclencher l'allongement du serpent en cas de contact avec la nourriture
export function update() {
    if(onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
        updateScore()
    }
}

// Fonction pour afficher la nourriture à l'écran
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
    }

// Fonction pour définir une position aléatoire pour la nourriture
function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}