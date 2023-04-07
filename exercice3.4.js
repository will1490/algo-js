let arr = [5, 2, 8, 1, 9, 4];

if (arr.length == 0) {
  console.log("Array is empty");
} else {
  let minimum = arr[0];
  let maximum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minimum) {
      minimum = arr[i];
    }
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }
  console.log("Minimum :", minimum);
  console.log("Maximum :", maximum);
}