// function calc(x, op, y) {
//     if (op == '+') return x + y;
//     else if (op == '-') return x - y;
//     if (op == '*') return x * y;
//     if (op == '/') return x / y;
// }

// let x = Number(prompt())
// let op = prompt();
// let y = Number(prompt());

// console.log(calc(x, op, y))

const calc = () => {
    if (op == '+') return x + y;
    else if (op == '-') return x - y;
    if (op == '*') return x * y;
    if (op == '/') return x / y;
}


let x = Number(prompt())
let op = prompt();
let y = Number(prompt());
console.log(calc(x, op, y));