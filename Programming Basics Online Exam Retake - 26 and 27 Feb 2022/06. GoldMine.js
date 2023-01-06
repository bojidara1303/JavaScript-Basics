function goldMine(input) {
    let index = 0;
    let locationsCount = Number(input[index]);
    index++;
    let expectedIncome = Number(input[index]);
    index++;

    while (locationsCount > 0) {
        let income = 0;
        let daysOnLocation = Number(input[index]);
        index++;
        let dayCounter = 0;


        while (dayCounter < daysOnLocation) {
            let currentIncome = Number(input[index])
            income += currentIncome;
            dayCounter++;
            index++;
        }


        let avgIncome = income / daysOnLocation;
        if (avgIncome >= expectedIncome) {
            console.log(`Good job! Average gold per day: ${avgIncome.toFixed(2)}.`)
        } else {
            let diff = expectedIncome - avgIncome;
            console.log(`You need ${diff.toFixed(2)} gold.`)
        }

        expectedIncome = Number(input[index]);
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
