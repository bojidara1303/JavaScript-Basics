function secret(data) {
    let firstNum = Number(data[0])
    let secNum = Number(data[1]);
    let thirdNum = Number(data[2]);

    for (let i = 1; i <= firstNum; i++) {
        for (let k = 2; k <= secNum; k++) {
            for (let l = 1; l <= thirdNum; l++) {
                if (i % 2 === 0 && l % 2 === 0 && (k >= 2 && k <= 7 && k !== 4 && k !== 6 && k !== 8 && k !== 9) && k / k === 1 && k / 1 === k) {
                    console.log(`${i} ${k} ${l}`)
                }
            }
        }
    }


}
secret(["3", "5", "5"]);
console.log("_____________________")
secret(["8", "2", "8"])