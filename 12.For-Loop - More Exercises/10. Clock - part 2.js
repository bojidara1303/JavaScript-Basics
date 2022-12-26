function clock() {

    for (let i = 0; i <= 23; i++) {
        for (let k = 0; k <= 59; k++) {
            for (let m = 0; m <= 59; m++) {
                console.log(`${i} : ${k} : ${m}`)
            }
        }
    }
}
clock()