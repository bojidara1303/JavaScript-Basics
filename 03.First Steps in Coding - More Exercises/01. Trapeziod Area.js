function trapeziodArea(data) {

    let a = Number(data[0]);
    let b = Number(data[1]);
    let h = Number(data[2]);
    let result = (a + b) * h / 2
    console.log(result.toFixed(2))
}
trapeziodArea(["8", "13", "7"])