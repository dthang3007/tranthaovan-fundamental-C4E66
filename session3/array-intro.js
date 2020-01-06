// CRUD _ create / read / update / delete

// read 
// 1
// console.log(menu)
// 2
// console.log(menu.length)

// for (let i = 0; i < menu.length; i++){
//     console.log(menu[i])
// }


// let hobby = ['music','film','japan']
// for (let i = 0; i < hobby.length; i++){
//     console.log(i, '.', hobby[i])
// }

// hobby.forEach((value,index) => {
//     console.log('${index + 1}. ${value}')
// } )
// let menu = ['Bun cha', 'Bun dau', 'Bun ca']
// menu[0] = 'Bun Hanh'

// menu.push('Pho bo')
// console.log(menu)


// しゅくだい
// .toUpperCase()

// n = prompt('Enter C(create), R(read), U(udate)')
// let menu = ['Bun cha', 'Bun dau', 'Bun ca','Cho','Hanh']

// if (n == 'C'){
//     userInput = prompt('Want to push : ')
//     menu.push(userInput)
//     console.log(menu)
// } 
// else if (n == 'R') {
//     for (let i = 0; i < menu.length; i++){
//         console.log(menu[i])
//     }
// }
// else if (n == 'U') {
//     indexInput = prompt('Your index :  ')
//     menu[indexInput-1] = prompt('New value : ') // User is very crazyyy
//     console.log(menu)
// }


// DELETE
// let menu = ['Bun cha', 'Bun dau', 'Bun ca','Cho','Hanh']

// console.log(menu.splice(0,3))

// しゅくだい

let menu = ['Bun cha', 'Bun dau', 'Bun ca','Cho','Hanh']
// yourIndex = prompt('Index : ')
// quantity = prompt('So luong muon xoa : ')

console.log(menu)
userInput = prompt()
for (let i = 0; i < menu.length; i++){
    if (userInput == menu[i]) {
        menu.splice(i,1)
    }
}
console.log(menu)