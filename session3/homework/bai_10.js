let nameInput = prompt('Name : ').split(',');

//let newArr = [];
let arr = new Array(nameInput);
console.log(arr);
let result = arr.map(x => '<' + x + '>');
console.log(...result);

// ?? what the hell