/**
 *En réutilisant la fonction rand10()créée dans l'exercice 2, écrivez une fonction nommée multiRand(n)qui renvoie un tableau de n nombres compris entre 1 et 10. 
 *Vous ne devez rien modifier dans rand10()pour y parvenir.
 *Ecrire une documentation pour la multiRand(n)fonction.
 *Utilisez cette fonction pour créer un programme qui demandera le nombre de nombres aléatoires à générer puis affichera ce même nombre de nombres aléatoires.  
 */


function rand10() {
  return Math.floor(Math.random() * 10) + 1;
}

// fonction 
function multiRand(n) {
    let arr = [];
    for (let i = 0 ; i < n ; i++) {
      arr.push(rand10());
    }
    return arr;
  }

//programme
let choice= Number(prompt("How many random numbers ? : "));
let numberRandNum = multiRand(choice);
 
alert(numberRandNum);


/**
 * La deuxième fonction multiRand(n) prend un argument n qui spécifie combien de nombres aléatoires doivent être générés.
 * Elle utilise une boucle pour appeler la fonction rand10() n fois et stocker les résultats dans un tableau. Le tableau est ensuite retourné.
 */








