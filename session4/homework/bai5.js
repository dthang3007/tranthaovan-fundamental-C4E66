let product = [
    {
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'White',
        category: 'Charger',
    },
    {
        name: 'VSmart Active 1',
        brand: 'VSmart',
        price: 5487,
        color: 'Black',
        category: 'Phone',
    },
    {
        name: 'IPhone X',
        brand: 'Apple',
        price: 21490,
        color: 'Gray',
        category: 'Phone',
    },
    {
        name: 'Samsung Galaxy A9 ',
        brand: 'Samsung',
        price: 8490,
        color: 'Blue',
        category: 'Phone',
    }
]
// 5.1
// for (let i = 0; i < product.length; i++) {
//     console.log(`#${i+1} : ${product[i].name}`);
//     console.log(`price : ${product[i].price}`);
//     console.log('\n');
//}
// 5.2
// let posIn = Number(prompt('Enter position: '));
// console.log(product[posIn-1]);

// 5.3
// let catIn = prompt('Enter the category : ');
// for (let i = 0; i < product.length; i++) {
//     if (catIn == product[i].category) {
//         console.log(`Name : ${product[i].name}`);
//         console.log(`Price : ${product[i].price}\n`);
//     }
// }

// product[0].provider =
// a = 'phukienzero\nDientuccc';
// b = 'TGDD\nDDGHN\nVHSTORE';
// c = 'TGDD';
// d = 'TGDD';


// 5.4
let add = [
    'phukienzero\nDientuccc',
    'TGDD\nDDGHN\nVHSTORE',
    'TGDD',
    'TGDD'
]

for (let i = 0; i < product.length; i++) {
    product[i].provider = add[i];
    console.log(`#${i+1}. ${product[i].name}`);
    console.log(`Price: ${product[i].price}`);
    console.log(`Provider: ${product[i].provider}`);
}

// 5.5
console.log('\n\n\n');
let provideIn = prompt('Enter provider : '); // input
for (let i = 0; i < product.length; i++) {
    if (provideIn == product[i].provider) {
        console.log(product[i].name);
        console.log(product[i].price);
        console.log(product[i].provider);
    }
}
// what the hell






