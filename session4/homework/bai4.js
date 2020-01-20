alert('Hi, this is dev dictionary');
const devDict = {
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: 'The formal word for ‘error’',
    pm: 'The short version of Project Manager, the person in charge of the final result of a project',
    ui_ux: 'UI means User Interface, UX mean User Exp'
};

while (true) {
    let userInput = prompt('Enter : ');
    if (userInput in devDict) {
        alert(`${userInput}\n${devDict[userInput]}`);
    }
    else {
        let addNew = prompt('Not found in Dict! Give explaintion : ');
        devDict[userInput] = addNew;
        alert(`${userInput}\n${devDict[userInput]}`);
    }
}































// while (true) {
//     let userIn = prompt('enter : ');
//     if (userIn in devDict) {
//         alert(`${userIn}\n${devDict[userIn]}`);
//     }
//     else {
//         let noinDict = prompt('Not found in dict, give explaination : ');
//         devDict[userIn] = noinDict;
//         alert(`${userIn}\n${devDict[userIn]}`);
//     }
// }







