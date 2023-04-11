/**
 *   Concevez une fonction manhattanqui prend 4 arguments :
 * streetA & avenueA (le point de départ en termes de rue et d'avenue),
 *  streetB & streetB (le point d'arrivée en termes de rue et d'avenue)
 *  et calcule le nombre de blocs entre deux points. 
 */

function manhattan(streetA, avenueA, streetB, avenueB) {
    return Math.abs(streetB - streetA) + Math.abs(avenueB - avenueA);
  }

  /**
   * La fonction prend en entrée les coordonnées de deux points streetA,
   *  avenueA et streetB, avenueB.
   *  Elle calcule la distance entre ces deux points en termes de blocs 
   * en additionnant la différence de coordonnées pour chaque axe (street et avenue),
   *  en utilisant la fonction Math.abs pour s'assurer d'obtenir une valeur positive.
   *  Elle renvoie la distance ainsi calculée.
   */

console.log(manhattan(1, 1, 2, 2)); // affiche 2
console.log(manhattan(1, 1, 1, 1)); // affiche 0
console.log(manhattan(5, 4, 3, 2)); // affiche 4

  