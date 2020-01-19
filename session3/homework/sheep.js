// 1.1
let arrSheep = [5,7,300,90,24,50,75];
console.log('here is sheep sizes : ');
console.log(...arrSheep);

let maxSheep = Math.max(...arrSheep);
console.log('max :',maxSheep);

let a = arrSheep.indexOf(maxSheep); // pos
arrSheep[a] = 8;
console.log('after : ', ...arrSheep);

// console.log('\nMONTH 1');
// console.log('Grow : ');
// for(let i = 0; i < arrSheep.length; i++) {
//     arrSheep[i] = arrSheep[i] + 50;
// } console.log(...arrSheep);

for (let month = 1; month <= 3; month++) {
    console.log('\nMONTH', month);
    console.log('grew : ');
    for (let i = 0; i < arrSheep.length; i++) {
        arrSheep[i] = arrSheep[i] + 50;
    }
    console.log(...arrSheep);
}

let sum = 0;
for(let i = 0; i < arrSheep.length; i++) {
    sum += arrSheep[i];
}
console.log(sum);
console.log(`I would get ${sum} * 2$ = ${sum*2}`);
