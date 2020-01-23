let userInput = prompt('Enter string : ');
for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] == '$') {
        userInput = userInput.replace('$', '');
    }
}

for (let i = userInput.length - 1; i >= 0; i--) {
    if (userInput.length-1 == '$') {
        userInput = userInput.replace('$', '');
    }
} // sao cai nay no khong hoat dong anh Duc ? 

for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] == '$' && userInput[i+1] == '$') {
        userInput = userInput.replace('$', '');
    }
}
console.log(userInput);





