function series(data) {
    let index = 0;
    let budget = Number(data[index]);
    index++;
    let numOfSeries = Number(data[index]);
    index++;

    for (let i = 0; i < numOfSeries; i++) {
        let name = data[index];
        index++;
        let price = Number(data[index]);
        if (name === 'Thrones') {
            budget -= price * 0.5;
        } else if (name === 'Lucifer') {
            budget -= price * 0.6;
        } else if (name === 'Protector') {
            budget -= price * 0.7;
        } else if (name === 'TotalDrama') {
            budget -= price * 0.8;
        } else if (name === 'Area') {
            budget -= price * 0.9;
        } else {
            budget -= price;
        }
        index++;

    }

    if (budget >= 0) {
        console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`)
    } else {
        let diff = Math.abs(budget)
        console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`)
    }
}
series(["10",
    "3",
    "Thrones",
    "5",
    "Riverdale",
    "5",
    "Gotham",
    "2"])
console.log("__________________")
series(["25",
    "6",
    "Teen Wolf",
    "8",
    "Protector",
    "5",
    "TotalDrama",
    "5",
    "Area",
    "4",
    "Thrones",
    "5",
    "Lucifer",
    "9"])
