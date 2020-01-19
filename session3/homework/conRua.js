clear();
const colors = ['red', 'gray', 'blue', 'purple', 'cyan'];
for (let i = 1; i <= 4; i++){
  // 4 vòng ngoài = 4 hinh
  for (let j = 0; j < colors.length; j++) {
    fd(100);
    rt(90);
  }
}