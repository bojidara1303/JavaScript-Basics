function pinCodes(data) {
    let fistNumMax = Number(data[0]);
    let secNumMax = Number(data[1]);
    let thirNumMax = Number(data[2]);

    for (let i = 1; i <= fistNumMax; i++) {
        for (let k = 2; k <= secNumMax; k++) {
            for (let m = 1; m <= thirNumMax; m++) {
                if (i % 2 === 0 && m % 2 === 0 && (k >= 2 && k <= 7 && k !== 4 && k !== 6) && k / k === 1 && k / 1 === k) {
                    console.log(`${i} ${k} ${m}`)

                }
            }

        }
    }


}
pinCodes(["3", "5", "5"])
console.log("_______________________")
pinCodes(["9", "9", "9"])