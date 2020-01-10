let userIn = prompt('Enter a sequence of numbers, separated by "," : ').split(",");
let min = userIn[0];
for (let i = 0; i < userIn.length; i++) {
    if (userIn[i] < userIn[0]) {
        min = userIn[i];
    }
}
alert('The smallest number is ' + min);
