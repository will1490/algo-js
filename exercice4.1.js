/**
 *  Créez une fonction nommée calcSurface qui prend la longueur et la largeur d'un rectangle et renvoie sa surface. 
 *  Créez ensuite un programme qui demande la longueur et la largeur d'un rectangle à l'utilisateur puis affiche la surface de ce rectangle. 
 *  Ce programme doit utiliser la fonction que vous avez créée. 
 */   

// function 
function calcSurface(length, width) {
    return (length * width);
  }
  
  // program 
  let length = prompt("Enter the length of the rectangle:");
  let width = prompt("Enter the width of the rectangle:");
  
  let surface = calcSurface(length, width);
  
  alert("The surface of the rectangle is : "+ surface);


/**La fonction appelée calcSurface avec 2 paramètres(length et width) et renvoie la surface du rectangle (longueur x largeur). 
 * Les 2 premières lignes du programme utilisent la méthode prompt pour demander à l'utilisateur de saisir la longueur et la largeur du rectangle et stocke les valeurs saisies dans des variables appelées length et width.
 * La troisième ligne appelle la fonction calcSurface en lui passant les valeurs de length et width comme arguments et stocke le résultat dans une variable appelée surface.
 * La quatrième ligne utilise la méthode alert pour afficher un message à l'utilisateur indiquant la surface du rectangle.
 *  */ 
