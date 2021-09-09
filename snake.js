import { getInputDirection} from "./input.js";
import { GRID_SIZE } from "./grid.js";


export let SNAKE_SPEED = 5;
const snakeBody = [{x: 11, y: 11}]
let newSegments = 0

// Function to control the snake's direction.
export function update() {
    addSegments()
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {... snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

// Function to move the snake's head position to the opposite side of the screen.
export function resetSnakeHead() {
    if (snakeBody[0].x === 0) {
        snakeBody[0].x = GRID_SIZE
    } else if (snakeBody[0].x === GRID_SIZE + 1) {
        snakeBody[0].x = 0
    } else if (snakeBody[0].y === 0) {
        snakeBody[0].y = GRID_SIZE
    } else if (snakeBody[0].y === GRID_SIZE + 1) {
        snakeBody[0].y = 0
    }

}

// Function to draw the snake on the screen.
export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}
// Function to expand the size of the snake.
export function expandSnake(amount) {
    newSegments += amount
    if (SNAKE_SPEED < 10) {
        SNAKE_SPEED += 1
    }
}

// Fonction to create snake segments.
export function onSnake(position, {ignoreHead = false} = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

// Function to get the position of the snake's head.
export function getSnakeHead() {
    return snakeBody[0]

}

// Function to detect that the snake intersect itself.
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

// Function to check if two objects are on the same spot.
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

// Function to expand the snake with 1 new square.
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
newSegments = 0
}