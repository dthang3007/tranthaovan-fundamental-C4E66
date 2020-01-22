const cmds = [
    {
        shape: 'circle',
        x: 0,
        y: -20,
        radius: 60,
    },
    {
        shape: 'circle',
        x: 0,
        y: 80,
        radius: 40,
    },
    {
        shape: 'circle',
        x: -75,
        y: 10,
        radius: 20,
    },
      {
        shape: 'circle',
        x: 75,
        y: 10,
        radius: 20,
    },
    {
        shape: 'square',
        x: -65,
        y: -100,
        width: 30,
    },
      {
        shape: 'square',
        x: 38,
        y: -100,
        width: 30,
    },
  
  {
        shape: 'rect',
        x: -30,
        y: 80,
        width: 20,
        height: 4
    },
    {
        shape: 'rect',
        x: 10,
        y: 80,
        width: 20,
        height: 4
    },
      {
        shape: 'rect',
        x: -10,
        y: 50,
        width: 20,
        height: 6
    },
  {
        shape: 'square',
        x: 500,
        y: 500,
        width: 20,
    },
]

for(let i = 0; i < cmds.length; i++) {
    rt(90)
    penup()
    fd(cmds[i].x)
    lt(90)
    fd(cmds[i].y)
    if (cmds[i].shape == 'square') {
        for (let j = 0; j < 4; j++) {
            fd(cmds[i].width)
        }
    }

    if (cmds[i].shape == 'rect) {
        for (let j = 0; j < 2; j++) {
            fd(cmds[i].x)
            rt(90)
            fd(cmds[i].y)
            rt(90)
        }
    }

    if (cmds[i].shape == 'circle) {
        for(let j = 0; j <= 720; j++) {
            penup()
            fd(radius-1)
            pendown()
            fd(radius-(radius-1))
            penup()
            bk(radius)
            pendown
            rt(0.5)
        }
    }
}
