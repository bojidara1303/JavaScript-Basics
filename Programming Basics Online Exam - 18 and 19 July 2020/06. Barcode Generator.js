function barcode(data) {
    let initNum = data[0];
    let endNum = data[1];
    let res = "";

    let initialA = Number(initNum[0]);
    let initialB = Number(initNum[1]);
    let initialC = Number(initNum[2]);
    let initialD = Number(initNum[3]);

    let endA = Number(endNum[0]);
    let endB = Number(endNum[1]);
    let endC = Number(endNum[2]);
    let endD = Number(endNum[3]);

    for (let a = initialA; a <= endA; a++) {
        for (let b = initialB; b <= endB; b++) {
            for (let c = initialC; c <= endC; c++) {
                for (let d = initialD; d <= endD; d++) {
                    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0){
                        res += `${a}${b}${c}${d} `
                    }
                }
            }
        }
    }
console.log(res)

}
barcode(["2345", "6789"]);
console.log("_________________")
barcode(["3256", "6579"])
console.log("_________________")
barcode(["1365", "5877"])

