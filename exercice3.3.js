// méthode push
let array = [1,2,3,4,5];
let newArray = [];
for (let i = 0; i < array.length; i++) {
  newArray.push(array[i]);
}
console.log(newArray);

// méthode 2 
let array2 = [6,7,8,9];
let array3 = array2.slice();
console.log(array3);

// méthode 3
let array4 = Array.from(array3);
console.log(array4);
