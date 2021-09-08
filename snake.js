import { getInputDirection} from "./input.js";

export let SNAKE_SPEED = 5;
const snakeBody = [{x: 11, y: 11}]
let newSegments = 0

// Fonction pour contrôler le serpent
export function update() {
    addSegments()
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {... snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

// Fonction pour téléporter la tête du serpent de l'autre côté de la grille
export function resetSnakeHead() {
    if (snakeBody[0].x === 0) {
        snakeBody[0].x = 21
    } else if (snakeBody[0].x === 22) {
        snakeBody[0].x = 0
    } else if (snakeBody[0].y === 0) {
        snakeBody[0].y = 21
    } else if (snakeBody[0].y === 22) {
        snakeBody[0].y = 0
    }

}

// Fonction pour afficher le serpent à l'écran
export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}
// Fonction pour allonger le serpent
export function expandSnake(amount) {
    newSegments += amount
    if (SNAKE_SPEED < 10) {
        SNAKE_SPEED += 1
    }
}

// Fonction pour
export function onSnake(position, {ignoreHead = false} = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

// Fonction pour obtenir la position de la tête du serpent
export function getSnakeHead() {
    return snakeBody[0]

}

// Fonction pour 
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

// Fonction pour comparer la position de deux objets
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

// Fonction pour allonger le serpent
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
newSegments = 0
}