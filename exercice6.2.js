class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
      this.topLeftXPos = topLeftXPos;
      this.topLeftYPos = topLeftYPos;
      this.width = width;
      this.length = length;
    }
  
    collides(otherRectangle) {
      // Vérification des positions des coins des rectangles
      if (
        this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
        this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
        this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
        this.topLeftYPos + this.length > otherRectangle.topLeftYPos
      ) {
        return true; // Il y a collision
      } else {
        return false; // Il n'y a pas de collision
      }
    }
  }
  
  // Exemple d'utilisation
  let rect1 = new Rectangle(0, 0, 10, 10);
  let rect2 = new Rectangle(5, 5, 10, 10);
  console.log(rect1.collides(rect2)); // true

  let rect3 = new Rectangle(4, 4, 8, 8);
  let rect4 = new Rectangle(0, 0, 7, 7);
  console.log(rect3.collides(rect4));

/**
 *  La méthode collides() compare la position des coins des deux rectangles pour déterminer s'ils entrent en collision. 
 * La méthode renvoie true si les deux rectangles se superposent, sinon elle renvoie false.
 *  Les positions sont calculées en ajoutant la position de chaque coin à la longueur ou à la largeur du rectangle.
 *   Dans l'exemple d'utilisation, deux rectangles sont créés et la méthode collides() est appelée avec l'un des rectangles comme argument.
 *   Dans ce cas, la méthode renvoie true car les deux rectangles se superposent. 
 */