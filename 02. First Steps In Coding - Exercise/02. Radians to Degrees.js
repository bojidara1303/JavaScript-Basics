function convert(data) {

    let rad = Number(data[0]);
    let degrees = rad * 180 / Math.PI;
    console.log(degrees)


}
convert(["3.1416"]);
convert(["6.2832"]);