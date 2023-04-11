class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
      this.topLeftXPos = topLeftXPos;
      this.topLeftYPos = topLeftYPos;
      this.width = width;
      this.length = length;
    }
  
    collides(otherRectangle) {
      if (
        this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
        this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
        this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
        this.topLeftYPos + this.length > otherRectangle.topLeftYPos
      ) {
        return true;
      }
      return false;
    }
  }
  
  let rectangles = [];
  
  // Create 1000 random rectangles
  for (let i = 0; i < 1000; i++) {
    let x = Math.floor(Math.random() * 1000);
    let y = Math.floor(Math.random() * 1000);
    let width = Math.floor(Math.random() * 100);
    let length = Math.floor(Math.random() * 100);
    rectangles.push(new Rectangle(x, y, width, length));
  }
  
  // Check for collisions and display the collided rectangles
  let collidedRectangles = [];
  for (let i = 0; i < rectangles.length; i++) {
    for (let j = i + 1; j < rectangles.length; j++) {
      if (rectangles[i].collides(rectangles[j])) {
        collidedRectangles.push(rectangles[i]);
        collidedRectangles.push(rectangles[j]);
      }
    }
  }
  
  // Remove duplicates from collidedRectangles array
  collidedRectangles = collidedRectangles.filter(
    (rect, index) => collidedRectangles.indexOf(rect) === index
  );
  
  // Display collided rectangles
  if (collidedRectangles.length > 0) {
    console.log("Rectangles in collision:");
    collidedRectangles.forEach((rect) => console.log(rect));
  } else {
    console.log("No rectangles in collision.");
  }
  