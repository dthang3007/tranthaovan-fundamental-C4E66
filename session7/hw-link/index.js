let linkID = document.getElementById('demo-a');
let button = document.getElementById('btn-demo');
let inputClick = document.getElementById('demo-input');

console.dir(linkID);
console.log(linkID.href);
console.dir(inputClick);

button.addEventListener('click', () => {
    inputClick.value = linkID.href;
    console.log(inputClick.value);
})


