console.log('Hi, task to become front-end master.');
let task = [
    {
        name : 'HTML',
        complete : false
    },
    {
        name : 'CSS',
        complete : false
    },
    {
        name : 'Basics of JS',
        complete : true
    },
    {
        name : 'Node Package Manager (npm)',
        complete : false
    },
    {
        name : 'Git',
        complete : false
    }
]

for(let i = 0; i < task.length; i++) {
    console.log(`${i+1}. ${task[i].name}`)
    console.log(`   ${task[i].complete}`)
}
console.log('\n')
let userIn = prompt('Enter you cmd : new/delete/update/complete');
if (userIn == 'new') {
    let newTask = prompt('Enter new task : ');
    task.push(                      // push data :))
        {
            name : newTask,
            complete : false
        }
    )
}
if (userIn == 'update') {
    let posUpd = Number(prompt('Enter positon : '));
    let newTitle = prompt('New title : ');
    task[posUpd-1].name = newTitle;
}
if (userIn == 'complete') {
    let posCom = Number(prompt('Enter position: '));
    task[posCom-1].complete = true;
}
if (userIn == 'delete') {
    let posDel = Number(prompt('Enter position: '));
    task.splice(task[posDel-1].name,1); 
    // splice (pos, many)
}


for(let i = 0; i < task.length; i++) {
    console.log(`${i+1}. [ ] ${task[i].name}`)
    if (task[i].complete = true) {
        console.log(`${i+1}. [x] ${task[i].name}`);
    }
}
// hell

