function checkHoisting() {
    console.log(foo);
    let foo = 'hello';
    console.log(foo);
}

checkHoisting();