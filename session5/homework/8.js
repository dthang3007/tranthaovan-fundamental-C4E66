// function
const removeOdd = (userInput) => {
    let newArray = [];
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] % 2 != 0) {
            continue;
        }
        newArray = newArray.push(userInput[i]);
    }
}

let userInput = prompt('Enter : ').split(',');
userInput = Number(userInput);
console.log(removeOdd(userInput));

