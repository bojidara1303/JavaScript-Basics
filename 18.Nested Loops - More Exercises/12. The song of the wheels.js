function solve(data) {

    let num = Number(data[0]);
    let counter = 1;
    let res = "";
    let i=1;
    let k=1;
    let m=1;
    let n;
    // let isFourth = false;


    for (i = 1; i <= 9; i++) {
        for (k = 1; k <= 9; k++) {
            for (m = 1; m <= 9; m++) {
                for (n = 1; n <= 9; n++) {
                    if (i < k && m > n && ((i * k) + (m * n) === num)) {
                        res += `${i}${k}${m}${n} `
                        counter++;

                    }

                }

            }

        }
    }

    console.log(`${res}`)

    if (counter < 4 || counter > 144) {
        console.log("No!")
    } else if (counter = 4) {
        console.log(`Password: ${i}${k}${m}${n}`)
    }


}
solve(["11"])
console.log("_____________________")
solve(["139"])
console.log("_____________________")
solve(["110"])
console.log("_____________________")
solve(["55"])