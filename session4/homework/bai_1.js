// 1.1
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
    };
// for (let x in product) {
//     console.log(x);
// }

// result return KEY

// 1.2
const obj = {
    id:1,
    name: "gowtham",
    active: true
 }
 
//  for (let key in obj){
//     if(obj.hasOwnProperty(key)){
//       console.log(`${key} : ${obj[key]}`)
//     }
//  }
 
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(`${key} : ${obj[key]}`);
    }
}

 //first iteration key is id
 //second iteration key is name
 //third iteration key is active