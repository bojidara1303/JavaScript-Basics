function convert(data) {
    let celsuius = Number(data[0]);
    let fahrenheit = (celsuius * 9 / 5) + 32;
    console.log(fahrenheit.toFixed(2))
}
convert(["25"])