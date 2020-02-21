var timeSheetData = [{
        project: 'Learn front-end',
        task: 'Learn HTML',
        time_spent: 6
    },
    {
        project: 'Learn front-end',
        task: 'Learn CSS',
        time_spent: 8
    },
    {
        project: 'Learn front-end',
        task: 'Learn JS var and operator types',
        time_spent: 6
    },
    {
        project: 'Learn git',
        task: 'Learn git basics',
        time_spent: 2
    },
];

// task 1
timeSheetData.forEach((value, index) => {
    console.log(index + 1);
    console.log(`Project: ${value.project}`);
    console.log(`Task: ${value.task}`);
    console.log(`Time spent: ${value.time_spent}`);
});

// task 3
console.log('\n')
var bodyTable = document.getElementById('table-body');
console.dir(bodyTable.innerText);
console.dir(bodyTable.innerHTML);

// task 4

timeSheetData.forEach((value, index) => {

    let html = `
        <tbody id="table-body">
            <tr>
                <td>${value.project}</td>
                <td>${value.task}</td>
                <td>${value.time_spent}</td>
            </tr>
        </tbody>
    `
    bodyTable.innerHTML += html;
});


// action1 = it time
// action 2 = nhieu time  aysn
// action 3 = it time


