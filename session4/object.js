// // ICRUD
// // ly thuyet tren lop :)))

// // initial
let person = {
    'name' : 'van',
    'age' : 18,
    'school' : 'TL',
}
console.log(person);

// read
console.log('doc age : ' , person.age)
console.log('doc name : ', person.name)
// chua hieu lam
let userKey = name; // 'name' in person thi moi tim duoc va tra loi
console.log(person[userKey])

//  create
person.dob = 1999;
person.pet = 'hanh cho';
console.log(person)

// update
person.age = 200;
console.log(person);

// delete
delete person.school
console.log(person)



// Bai chua update!


// //initial
// let person = {
//     'name':'Van', // proverty:value 
//     'age':19,
//     'school':'TLU' ,
//     'status':'false' ,
// }
// //Read
// console.log(person)
// console.log(person.name)
// let userKey= 'name'
// console.log(person[userKey])
// //Create==Update
// person.dob = 2000
// console.log(person.dob)
//delete person.school
// let person = {
//     'name':'ThanhLong',  
//     'age':19,
//     'school':'HUST' ,
// }
// person.facebook='nguyenthanhlong'
// let userInput=prompt("nhap vao key muon thay doi ")
// let changeUser =prompt("Nhap vao tu thay doi")
// person[userInput]=changeUser
// console.log(person)