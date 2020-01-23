const removeS = (userInput) => {
    return userInput = userInput.replace('$', '');
}

let userInput = prompt('Enter string : ');
for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] == '$') {
        removeS(userInput);
    }
}

for (let i = userInput.length - 1; i >= 0; i--) {
    if (userInput.length-1 == '$') {
        removeS(userInput);
    }
} // sao cai nay no khong hoat dong anh ? 

for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] == '$' && userInput[i+1] == '$') {
        removeS(userInput);
    }
}
console.log(userInput);

let string_with_no_dollars = removeS("$80% percent of $life is to show $up");

if (string_with_no_dollars == "80% percent of life is to show up"){
    console.log("Your function is correct");
}
else{
    console.log("Oops, there's a bug");
}

