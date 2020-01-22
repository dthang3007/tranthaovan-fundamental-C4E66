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
// console.log(Object.keys(dictionary)) // ep sang kieu array => in ra key : value
// in ra dictionary
Object.keys(dictionary).forEach((value,index) =>{
    console.log(`${index + 1}. ${value}`)
})

while(true) {
    
    
    let userIn = prompt('Nhap vao : ').toLowerCase();
    
    if (userIn == 'end') {
        break;
    }
    if (a = userIn in dictionary) {
        console.log(dictionary[userIn]);
    } else {
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
    
}


// c2

  
// diction={
//     'any':'anh nguoi yeu',
//     'btw':'by the way',
//     'anw':'any way',
// }
// let userInput=prompt("Nhap vao tu ma` ban muon xem ")
// if(userInput=='any'){
//     console.log(diction[userInput])
// }else if(userInput=='btw'){
//     console.log(diction[userInput])

// }else if(userInput=='anw'){
//     console.log(diction[userInput])
// }else{
//     alert("khong co trong tu dien")
//     let addInput=prompt("Ban co muon them vao tu dien k Y/N")
//     if(addInput=='Y'){
//         diction.userInput=userInput
//     }else if(addInput=='N'){
//         alert("Cam on ban")
//     }else{
//         alert("Ban nhap sai roi")
//     }
// }