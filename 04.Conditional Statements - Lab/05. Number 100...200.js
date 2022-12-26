function num(data) {
    let number = Number(data[0])

    if (number < 100) {
        console.log("Less than 100")
    } else if (number >= 100 && number <= 200) {
        console.log("Between 100 and 200")
    } else if (number > 200) {
        console.log("Greater than 200")
    }

}
num(["95"]);
num(["120"])