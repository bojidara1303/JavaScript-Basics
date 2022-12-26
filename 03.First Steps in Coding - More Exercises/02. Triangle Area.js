function solve(data) {
    let a = Number(data[0]);
    let h = Number(data[1]);
    let result = a * h / 2;
    console.log(result.toFixed(2))
}
solve(["20", "30"])