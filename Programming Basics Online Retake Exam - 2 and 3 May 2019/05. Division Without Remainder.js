function division(data) {
    let numsCount = Number(data[0]);

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;

    for (let i = 1; i <= numsCount; i++) {
        let currentNum = Number(data[i])
        if (currentNum % 2 === 0) {
            p1Counter++;
        } 
         if (currentNum % 3 === 0) {
            p2Counter++;
        } 
         if (currentNum % 4 === 0) {
            p3Counter++;
        }
    }

    let p1Percent = (p1Counter / numsCount) * 100;
    let p2Percent = (p2Counter / numsCount) * 100;
    let p3Percent = (p3Counter / numsCount) * 100;

    console.log(`${p1Percent.toFixed(2)}%`)
    console.log(`${p2Percent.toFixed(2)}%`)
    console.log(`${p3Percent.toFixed(2)}%`)

}
division(["10",
    "680",
    "2",
    "600",
    "200",
    "800",
    "799",
    "199",
    "46",
    "128",
    "65"])
console.log("____________________")
division(["3",
    "3",
    "6",
    "9"])
