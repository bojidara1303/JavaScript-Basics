function circle(data) {

    let radius = Number(data[0]);

    let face = Math.PI * Math.pow(radius, 2);
    let perimeter = 2 * Math.PI * radius;

    console.log(face.toFixed(2))
    console.log(perimeter.toFixed(2))

}
circle(["3"])