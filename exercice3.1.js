let arr = [1, 2, 3, 4, 5];
let arr2 = [100, 101, 102];
let list_arr = [arr, arr2];
let total = 0;

for (let x of list_arr) {
    for (let elem of arr) {
        total = total + elem;
        }
console.log("total ["+ x + "] =>" + total);

 }


    

