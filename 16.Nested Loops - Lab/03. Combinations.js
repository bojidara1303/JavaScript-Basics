function combinations(data) {
    let n = Number(data[0]);
    let counter = 0;

    for (let i = 0; i <= n; i++) {
        for (let k = 0; k <= n; k++) {
            for (let l = 0; l <= n; l++) {
                if (i + k + l === n) {
                    counter++;
                }
            }
        }
    }
console.log(counter)
}
combinations(["25"]);
combinations(["20"]);
combinations(["5"]);