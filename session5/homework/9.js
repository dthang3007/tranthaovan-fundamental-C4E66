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


even_list = get_even_list([1, 2, 5, 9, -10, 6])

if (JSON.stringify(even_list) == JSON.stringify([2, -10, 6])){
    print("Your function is correct");
}
else
{
    console.log("Ooops, bugs detected")
}
