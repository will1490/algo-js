let arr = [1, 2, 3, 4, 5];
let arr2 = [100, 101, 102];
let list_arr = [arr, arr2];
let total = 0;


for (let x of list_arr) {
    len_arr = 0;
    total = 0;
    for (let elem of x) {
        total = total + elem;
        len_arr = len_arr + 1
        }
console.log("total ["+ x + "] => " + (total/len_arr));

 }