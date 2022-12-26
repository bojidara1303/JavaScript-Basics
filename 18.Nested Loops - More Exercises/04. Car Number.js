function carNums(data) {
    let initNum = Number(data[0]);
    let endNum = Number(data[1]);

    let res = "";

    for (let i = initNum; i <= endNum; i++) {
        for (let k = initNum; k <= endNum; k++) {
            for (let m = initNum; m <= endNum; m++) {
                for (let n = initNum; n <= endNum; n++) {
                    if (((i % 2 === 0) && n % 2 === 1) && ((i > n) && (k + m) % 2 === 0)) {
                        res += `${i}${k}${m}${n} `
                    } else if (((i % 2 === 1) && n % 2 === 0) && ((i > n) && (k + m) % 2 === 0)) {
                        res += `${i}${k}${m}${n} `
                    }
                }
            }
        }
    }

    console.log(res)
}
carNums(["2", "3"]);
console.log("_____________________")
carNums(["3", "5"]);
console.log("_____________________")
carNums(["5", "8"])