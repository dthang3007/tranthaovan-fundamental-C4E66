userInput = prompt('Enter C / R / U / D / E : ').toUpperCase()
menu = ['Sach', 'Vo', 'Quan', 'Ao', 'But', 'Giay', 'Tay']

if (userInput == 'C') {
    newEle = prompt('Want to creat : ')
    menu.push(newEle)
    console.log(menu)
}

else if (userInput == 'R') {
    readInput = prompt('read all or read index ? : ').toLowerCase()
    if (readInput == 'read all') {
        console.log(menu)
    }
    else if (readInput == 'read index') {
        indexInput = Number(prompt('Index ? : '))
        if (indexInput < menu.length) {
            console.log(menu[indexInput])
        } else {
            console.log('Wrong')
        }
    }
}

else if (userInput == 'U') {
    updateInput = prompt('V or I ? :').toLowerCase()
    if (updateInput == 'v') {
        yourValue = prompt('Your Value : ')  
        valueUpdate = prompt('Your new :')
        for (let i = 0; i < menu.length; i++) {
            console.log(menu[i])
            if (yourValue == menu[i]) {
                menu[i] = valueUpdate
                console.log(menu[i])
            }    
        }  
        console.log(menu)
    }

// Promise
//     .then(() => {})
//     .catch(() =>)
    else if (updateInput == 'i') {
        yourIndex = prompt('Your index : ')
        valueUpdate = prompt('Your new :')
        for (let i = 0; i < menu.length; i++) {
            if (yourIndex == menu.indexOf(menu[i])) {
                menu[i] = valueUpdate
            }
            
        }
        console.log(menu)
    }
}

else if (userInput == 'D') {
    delInput = prompt('V or I ? :').toLowerCase()

    if (delInput == 'v') {
        yourValue = prompt('Your Value : ')  
        for (let i = 0; i < menu.length; i++) {
            if (yourValue == menu[i]) {
                menu.splice(i,1)
            }    
        }
        console.log(menu)
    }
    else if (delInput == 'i') {
        yourIndex = prompt('Your index : ')
        for (let i = 0; i < menu.length; i++) {
            if (yourIndex == menu.indexOf(menu[i])) {
                menu.splice(i,1)
            }
        }
        console.log(menu)
    }
}