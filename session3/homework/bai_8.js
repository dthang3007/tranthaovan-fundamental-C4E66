sizeIn = prompt('Hello, my name is Van and here is my sheep sizes : ').split(' ');
sizeIn = Number(sizeIn);
console.log(typeof(sizeIn));

bigSi = Math.max(sizeIn);

console.log(`Now my biggest sheep has size ${bigSi}, let's shave it`);
