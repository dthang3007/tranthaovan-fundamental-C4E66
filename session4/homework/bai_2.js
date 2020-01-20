// let country = 'canada';
// let firstName = 'John';
// let lastName = 'Joe';

// const student = {
//     firstName : 'Glad',
//     lastName : 'Chida',
//     country : 'nigeria'
// };

// ({firstName, lastName} = student);

// console.log(firstName, lastName, country);


const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
};

let {subject : sub, dueDate : dD, assignTo : as} = task;

//let a = ({subject, dueDate, assignTo} = task);

console.log(`${sub}\n${dD}\n${as}`);
//console.log(subject,dueDate,assignTo);


    