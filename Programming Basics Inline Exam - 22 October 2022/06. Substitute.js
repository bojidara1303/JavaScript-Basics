function substitute(data) {
    let k = Number(data[0]);
    let l = Number(data[1]);
    let m = Number(data[2]);
    let n = Number(data[3]);
    let res = "";
    let counter = 0;

    if ((k >= 0 && k <= 8) && (l >= 0 && l <= 9) && (m >= 0 && m <= 8) && (n >= 0 && n <= 9)) {
        for (let a = k; a <= 8; a++) {
            for (let b = 9; b >= l; b--) {
                for (let c = m; c <= 8; c++) {
                    for (let d = 9; d >= n; d--) {
                        if ((a % 2 === 0 && b % 2 === 1) && (c % 2 === 0 && d % 2 === 1) && (a === c && b === d)) {
                            console.log("Cannot change the same player.")
                        } else if ((a % 2 === 0 && b % 2 === 1) && (c % 2 === 0 && d % 2 === 1)) {
                            res = `${a}${b} - ${c}${d}`
                            console.log(`${res}`)
                            counter++;
                        }
                    }
                }
            }
            if (counter === 6) {
                break;
            }
        }
    }
}

substitute(["7",
    "6",
    "8",
    "5"])
console.log("______________________")
substitute(["6",
    "7",
    "5",
    "6"])






