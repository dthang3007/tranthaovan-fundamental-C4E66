let numIn = prompt().split(',');

// C1
// for (let i = 0; i < numIn.length; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }

// C2

let a = numIn.filter(x => x % 2 != 0);
console.log(a);
