// practise 1
// let person = {
//     'name' : 'van',
//     'age' : 17,
//     'school' : 'TL',
// }

// person.fb = 'TTV';
// console.log(person)


// let userKey = prompt() // nhap key
// let userValue = prompt() // nhap key
// // truy cap userKey va thay doi userValue
// person[userKey] = userValue;
// console.log(person)

// practise 2
let dictionary = {
    'any' : 'anh nguoi yeu',
    'vcl' : 'vo cung luon',
    'btw' : 'between',
}
//console.log(dictionary);
let userIn = prompt('Nhap vao : ');

if (a = userIn in dictionary) {
    console.log(dictionary[userIn]);
}
else {
    yesNo = prompt('Want to add Dic ? Yes or No? ').toLowerCase();
    if (yesNo == 'yes') {
        userContent = prompt('Your value : ');
        dictionary[userIn] = userContent;
        console.log(dictionary);
    }
    else {
        console.log('Thank you!')
    }
}
