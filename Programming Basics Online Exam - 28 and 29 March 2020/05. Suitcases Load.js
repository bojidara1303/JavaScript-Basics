function suitcase(data) {
    let index = 0;
    let initialSpace = Number(data[index]);
    index++;
    let baggageCounter = 0;

    while (data[index] !== "End") {
        let currentBaggage = Number(data[index]);
        if (index % 3 === 0) {
            currentBaggage = currentBaggage + (currentBaggage * 0.1)
        }
        initialSpace -= currentBaggage;
        if (initialSpace < 0) {
            console.log("No more space!");
            break;
        }
        baggageCounter++;
        index++;

    }

    if (initialSpace >= 0) {
        console.log(`Congratulations! All suitcases are loaded!`)
    }
    console.log(`Statistic: ${baggageCounter} suitcases loaded.`)
}
suitcase(["550",
    "100",
    "252",
    "72",
    "End"])
console.log("__________________")
suitcase(["700.5",
    "180",
    "340.6",
    "126",
    "220"])
console.log("___________________")
suitcase(["1200.2",
    "260",
    "380.5",
    "125.6",
    "305",
    "End"])
