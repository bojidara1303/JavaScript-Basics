function goldMine(data) {
    let index = 0;
    let locationsCount = Number(data[index]);
    index++;
    let expectedIncome = Number(data[index]);
    index++;
    

    while (locationsCount > 0) {
        let income = 0;
        let daysOnLocation = Number(data[index]);
        index++;

        for (let i = 1; i <= daysOnLocation; i++) {
            let currIncome = Number(data[index]);
            income += currIncome;
            index++;
        }

        let avgIncome = income / daysOnLocation;
        if (avgIncome >= expectedIncome) {
            console.log(`Good job! Average gold per day: ${avgIncome.toFixed(2)}.`)
        } else {
            let diff = expectedIncome - avgIncome;
            console.log(`You need ${diff.toFixed(2)} gold.`)
        }

        expectedIncome = Number(data[index]);
        index++;

        locationsCount--;
    }

}
goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"])
console.log("___________________________")
goldMine(["1",
    "5",
    "3",
    "10",
    "1",
    "3"])
