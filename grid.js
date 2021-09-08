const GRID_SIZE = 21

// Fonction pour définir des coordonnées (x,y) aléatoires à l'intérieur de la grille
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

// Fonction pour définir les limites de la grille
export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}