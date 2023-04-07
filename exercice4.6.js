/**
 *Créez une fonction factorial(a)qui renvoie la factorielle d'un nombre.
 * Cette fonction doit être récursive. 
 */

function factorial(x) {
    let total = 1;
    for (let i = 1; i <= x; i++)
      total = total * i;
    console.log(total);  
    return;
  }
  
  factorial(5);    // => result = 120

