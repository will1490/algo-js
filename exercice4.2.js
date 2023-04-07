/**
 * Créez une fonction nommée rand10()qui renvoie un entier aléatoire entre 1 et 10. Créez un programme qui affichera le résultat de cette fonction à chaque exécution.
 * Ecrire une documentation pour la rand10()fonction
 */ 

function rand10() {
    return Math.floor(Math.random() * 10) + 1;
  }

/**
 *   => Math.random() génère un nombre aléatoire compris entre 0 (inclus) et 1 (exclus).
 *   => Math.floor() arrondit un nombre à l'entier inférieur.
 *   => En multipliant le résultat de Math.random() par 10 et en ajoutant 1, on obtient un nombre entier aléatoire entre 1 et 10.
 */ 
 
console.log(rand10());    //  => affiche un nombre aléatoire entre 1 et 10 à chaque exécution