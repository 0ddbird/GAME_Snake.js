// Definition of the initial player score
export let score = 0;

// Function to increment the player score by 1 and update the displayed text in the page.
export function updateScore() {
    score++;
    document.getElementById("score").innerHTML = score;
}