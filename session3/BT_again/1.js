let product = ['Quan', 'Ao', 'Sach', 'Vo', 'But'];

let userIn = prompt('C, R, U, D ? ');

while (true) {
    if (userIn == 'r') {
        console.log('Current items : \n ');
        product.forEach((value, index) => {
            console.log(`${index + 1}. ${value}`)
        })
        break;
    }
    if (userIn == 'c') {
        let addNew = prompt('New item : ');
        product.push(addNew);
        alert('DONE!');
        break;
    }
}

// shop oke