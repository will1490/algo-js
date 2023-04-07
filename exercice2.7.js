let n = Number(prompt("Give me a number : "));
let y = 0;
for (let i=0 ; i < n ; i++) {
    y = Number(prompt("Enter a new number : "));
    y += y;
 
}
alert("Total = "+y);