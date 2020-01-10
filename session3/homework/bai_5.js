let numIn = prompt('Enter the sequence of numbers : ').split(",");

// console.log(numIn.length);
let sum = 0;
for (let i = 0; i <= numIn.length; i++) {
    sum += i;
}
// console.log(sum);
alert('The sum of them is '+ sum); // sum
// complete