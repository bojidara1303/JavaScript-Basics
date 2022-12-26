function giftsFromSanta(input) {

    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);
    let res = "";

    for (let i = m; i >= n; i--) {
        let currentNumber = Number(i)
        if (currentNumber % 2 === 0 && currentNumber % 3 === 0 && currentNumber !== s) {
            res += `${currentNumber} `
        } else if (currentNumber % 2 === 0 && currentNumber % 3 === 0 && currentNumber == s) {
            break;
        }
    }
    console.log(`${res}`)

}
giftsFromSanta(["1", "30", "15"])
console.log("________________________")
giftsFromSanta(["1", "36", "12"])
console.log("________________________")
giftsFromSanta(["20", "1000", "36"])

