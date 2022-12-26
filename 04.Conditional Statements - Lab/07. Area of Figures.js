function areaOfFigures(data) {

    let figure = data[0];
    let a = Number(data[1]);
    let b = Number(data[2]);


    switch (figure) {
        case 'square':
            area = (Math.pow(a, 2)).toFixed(3);
            console.log(area)
            break;

        case 'rectangle':
            area = (a * b).toFixed(3);
            console.log(area)
            break;

        case 'triangle':
            area = (a * b / 2).toFixed(3);
            console.log(area)
            break;

        case 'circle':
            area = (Math.PI * Math.pow(a, 2)).toFixed(3);
            console.log(area)
    }


}
areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["triangle", "4.5", "20"])
