let userIn = prompt('An array : ').split(",");
let arr = Array(userIn);
// console.log(arr)
let numIn = Number(prompt('Enter a number : '));

if (arr.indexOf(numIn)) alert(`${numIn} is FOUND in array ${arr}`);
else alert(`${numIn} is NOT FOUND in array ${arr}`);