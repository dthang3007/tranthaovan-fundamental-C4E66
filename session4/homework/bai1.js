const product = {
    name : 'xiaomi rice cooker',
    price : 30,
    brand : 'xiaomi',
    color : 'white'
}

for (let x in product) {
    console.log(x); 
}

// 1.1 property
console.log(product.hasOwnProperty('name\n')); // true

// for (let item in product) {
//     if (product.hasOwnProperty(item)) {
//         console.log(`${item} : ${product[item]}`)
//     }
// }
console.log('\nprint all here');
for (let key in product) {
    if (product.hasOwnProperty(key)) {
        console.log(`${key} : ${product[key]}`);
    }
}



