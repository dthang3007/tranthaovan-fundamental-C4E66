// var time = setTimeout(() => {
//     console.log('hello')
// }, 2000);

// console.log(1);

var context = {
    data : null
};

// get data from api
const getData = async () => {
    var getApi = await fetch('https://reqres.in/api/users?page=2');
    var newData = await getApi.json();
    context.data = newData.data;
    //console.log(newData.data);
}

getData();

// show data 

const showData = async () => {
    await getData();
    console.log(context.data);
    var showDataHTML = document.getElementById('showData');
    context.data.forEach((value, index) => {
        var html = `
        <div id = 'users-${index}'>
            <li> Name: ${value.first_name} ${value.last_name}</li>
            <li> Email: ${value.email} </li>
            
            <br>
        </div>
        `
        showDataHTML.innerHTML += html;    
    });
    // showDataHTML.innerHTML += html; // khong co ra!
}
showData();

// show detail data



// not yet !
const showDetailInfo = async () => {
    await showData()
    for(let i = 0; i < context.data.length ; i ++){
        let userInfo = document.getElementById(`user-${i}`);
        userInfo.addEventListener('click', () => {
            console.log(userInfo.children[2]);
            userInfo.children[2].classList.toggle('view');
        })
    }
}

showDetailInfo()
