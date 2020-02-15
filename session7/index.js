// let p = document.getElementById('text');

// //console.log(p);
// console.dir(p.innerHTML); // thuoc tinh cua id = 'text'
// let number = document.getElementsByClassName('name');
// console.log(number);

// //update
// p.innerHTML = 'Vann' // p ở đây là biến


// let button = document.getElementById('push');
// // button.addEventListener('click', () => {
// //     console.log('Click em roi do!');
// // });

let list = document.getElementById('list');
let addList = list.innerHTML;
console.log(addList)
console.dir(list);

let userInput = document.getElementById('userInput');

let buttonUser = document.getElementById('button');

button.addEventListener('click', () => {
    console.dir(userInput.value);
    //list.innerHTML += userInput.value;
    var result = list.innerHTML;
    list.innerHTML += `<li>${userInput.value}</li>`;
    //console.log(addList);
    userInput.value = '';

    console.dir(deleteUser);
});

let deleteUser = document.getElementById('delete');
deleteUser.addEventListener('click', () => {
    console.dir(list.children);
    // 2 cach xoa phan tu cuoi trong DOM list :))
    list.removeChild(list.children[list.children.length-1]);
    //list.removeChild(list.lastElementChild);
});

for(let i in list.children) {
    
}