// let p = document.getElementById('text');

// //console.log(p);
// console.dir(p.innerHTML); // thuoc tinh cua id = 'text'
// let number = document.getElementsByClassName('name');
// console.log(number);

// //update
// p.innerHTML = 'Vann' // p ở đây là biến


// let buttonUserUserUser = document.getElementById('push');
// // buttonUserUserUser.addEventListener('click', () => {
// //     console.log('Click em roi do!');
// // });

// let list = document.getElementById('list');
// let addList = list.innerHTML;
// console.log(addList)
// console.dir(list);

// let userInput = document.getElementById('userInput');

// let buttonUserUserUserUser = document.getElementById('buttonUserUserUser');

// buttonUserUserUser.addEventListener('click', () => {
//     console.dir(userInput.value);
//     //list.innerHTML += userInput.value;
//     var result = list.innerHTML;
//     list.innerHTML += `<li>${userInput.value}</li>`;
//     //console.log(addList);
//     userInput.value = '';

//     console.dir(deleteUser);
// });

// let deleteUser = document.getElementById('delete');
// deleteUser.addEventListener('click', () => {
//     console.dir(list.children);
//     // 2 cach xoa phan tu cuoi trong DOM list :))
//     list.removeChild(list.children[list.children.length-1]);
//     //list.removeChild(list.lastElementChild);
// });

// for(let i in list.children) {
    
// }


// let p = document.getElementById('text')

// // console.log(p)
// console.dir(p)
// console.log(p.innerText)

// p.innerText = 'Duc dep zai'
// console.log(p.innerText)
// // let number = document.getElementsByClassName('number')
// // console.log(number)

// let buttonUserUserUser = document.getElementById('push')

// buttonUserUserUser.addEventListener('click', () => {
//     console.log('click em roi em do')
// })

let list = document.getElementById('list')
let userInput = document.getElementById('user-input')
let buttonUserUserUser = document.getElementById('buttonUserUser')
let del = document.getElementById('delete') // buttonUserUser
console.dir(list)
console.dir(userInput)
console.dir(buttonUserUser)

buttonUserUser.addEventListener('click', ()=>{
    console.dir(userInput.value)
    console.dir(list)
    list.innerHTML += `<li>${userInput.value}</li>`
    userInput.value =''
})

del.addEventListener('click',()=>{
    
    // console.dir(list)
    // list.removeChild(list.children[list.children.length-1])
    // list.removeChild(list.lastElementChild)
    for(let i = 0; i< list.children.length; i++){
        if(userInput.value == list.children[i].innerText){
            list.removeChild(list.children[i])
        }
    }
    // (list.children[0].innerText)
    // console.log()
})