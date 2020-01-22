const circle = {
    shape: 'circle',
    x: 100,
    y: 50,
    radius: 30,
};
rt(90)
penup()
fd(circle.x)
lt(90)
fd(circle.y)

for(let i = 0; i <= 720; i++){
    penup()
    fd(29)
    pendown()
    fd(1)
    penup()
    bk(30)
    pendown()
    rt(0.5)
}


