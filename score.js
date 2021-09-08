/* 
Score doit afficher le total de nourriture mangée par le serpent au cours de la partie.
Sa valeur initiale est de 0.
Sa valeur s'incrémente de 1 a chaque fois que le serpent gobe la nourriture.
Le score doit être affiché à l'écran du joueur, il faut donc rajouter un bloc pour le compteur dans la page HTML.
On viendra modifier le compteur a chaque incrément.
*/
export let score = 0;

export function updateScore() {
    score++;
    document.getElementById("score").innerHTML = score;
}


// Récupérer l'evenement 