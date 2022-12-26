function club(data) {
    let expectedIncome = Number(data[0]);
    let income = 0;
    let index = 1;
    let command = data[index];
    let price = 0;

    while (command) {
        if (command === "Party!") {
            break;
        }
        command = data[index];
        let cocktailLenght = command.length
        index++;
        let countOrdered = Number(data[index]);
        price = cocktailLenght * countOrdered;
        if (price % 2 === 1) {
            price = price * 0.75;
            income += price;
        } else {
            income += price
        }
        index++;
        command = data[index]

    }
    if (income >= expectedIncome) {
        console.log("Target acquired.")
    } else {
        let diff = Math.abs(expectedIncome - income)
        console.log(`We need ${diff.toFixed(2)} leva more.`)
    }
    console.log(`Club income - ${income.toFixed(2)} leva.`)
}
club(["500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!"])
console.log("____________________")
club(["100",
    "Sidecar",
    "7",
    "Mojito",
    "5",
    "White Russian",
    "10"])
