function unique(num) {
    let numInput = Number(num);
    let res = "";

    for (let i = 1; i <= 9; i++) {
        for (let k = 1; k <= 9; k++) {
            for (let m = 1; m <= 9; m++) {
                for (let n = 1; n <= 9; n++) {
                    if (i + k === numInput && m + n === numInput) {
                        if ((numInput / (i + k) === 1) || ((numInput / (i + k)) % 2 === 0)) {
                            res += `${i}${k}${m}${n} `
                        }

                    }
                }
            }
        }
    }

    console.log(res)
    // console.log(numInput)
}
unique("3");
console.log("_______________________")
unique("7");
console.log("_______________________")
unique("24");