// let selectItem = document.getElementById('select-item');
// console.dir(selectItem.options);

// let arr = [0,1,2,3,4,5,6,7];
// selectItem.addEventListener('click', () => {
//     console.log('hello');
// })

// let red = document.getElementById('red');
// console.dir(red.label);



let selectBox = document.getElementById('select-item');
console.dir(selectBox);
console.dir(selectBox.options);
console.dir(selectBox.options[1].text);

let selectItem = selectBox.options[selectBox.selectedIndex].text;
button.addEventListener('onChange', () => {
    console.log(selectItem)
})


// nếu người dùng chọn => lưu vào 1 biến A

// getID vào cái button, chọn xong 1 element rồi click
// rồi xóa cái biến A lưu trên

// nhưng em không biết viết syntax như nào, e search 
// rồi code rồi nhưng vẫn báo lỗi