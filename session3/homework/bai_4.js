let menu = ['Jeans', 'T-shirt', 'Socks'];
let userIn = prompt('Hi, there, welcome to shop admin panel, what do you want (C, R, U, D)?').toLowerCase();

if (userIn == 'r') {
    console.log(menu);
        
} else if (userIn == 'c') {
    createCon = prompt('Enter the name of the new item : ');
    menu.push(createCon);
    alert('Done');
    console.log(menu);
        
} else if (userIn == "r") {
    console.log(menu);
} else if (userIn == 'u') {
    posIn = Number(prompt('Enter your position you want to update :'));
    updCon = prompt('Enter the new name : ');
    
}

// chua hoan thanh bai nay !
