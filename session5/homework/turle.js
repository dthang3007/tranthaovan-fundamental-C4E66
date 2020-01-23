// // 1
// function turle1 () {
//     console.log('Hello world');
//     console.log('Hello world');
//     console.log('Hello world');
//     return;
// }

// turle1();


// // 2
// function sum (a,b) {
//     let sum = 0;
//     console.log(a+b);
//     return;
// }
// sum(1,2);


// // 3
function drawSquare (doDai, colorTurtle) {
    for (let i = 0; i < 4; i++) {
      color(colorTurtle);
      fd(doDai);
      rt(90);
    }
  }
  
drawSquare(100, "red")



// 4
// hinh anh



// 5
clear();
rt(90);
const veSao = (doDai) => {
  for (let i = 0; i < 5; i++) {
    fd(doDai);
    rt(180-36);
  }
}

veSao(100);

