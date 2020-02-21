var context = {
    data : null
}

// get data name from api
const getData = async () => {
    var data = await fetch('http://dummy.restapiexample.com/api/v1/employees');
    var newData = await data.json();
    context.data = newData.data;

    var employeeHTML = document.getElementById('employee_salary');
    context.data.forEach((value, index) => {
        let html = `
        <div id = 'users-${index}>
        <li> ${value.employee_name} </li>
        </div>
        `
        employeeHTML.innerHTML += html;
    });
}

getData();

// show salary

const showSalary = async () => {
    await getData();
    var touchData = context.data; // array has many obj
    for (let i = 0; i < context.data.length; i++) {
        var userInfo = document.getElementById(`users-${i}`);
        userInfo.addEventListener('mouseover', () => {

            touchData.forEach((value, index) => {
                console.log(value.employee_salary);
            })

        })
    }
}

showSalary();