var context = {
    data : null
}

// get data
const getData = async () => {
    var data = await fetch('http://dummy.restapiexample.com/api/v1/employees');
    var newData = await data.json();
    context.data = newData.data;
    console.log(context.data);
    var getHTML = document.getElementById('task-hell');
    context.data.forEach((value, index) => {

        let html = `
        <li> ${value.employee_name} </li>
        `

        getHTML.innerHTML += html;
    });
}

getData();