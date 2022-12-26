function match(data) {

    let budget = Number(data[0]);
    let type = data[1];
    let peopleCount = Number(data[2]);
    let vipPrice = 499.99;
    let normalPrice = 249.99;
    let price = 0;

    let transportPrice = 0;

    if (peopleCount >= 1 && peopleCount <= 4) {
        transportPrice = budget * 0.75;
    } else if (peopleCount >= 5 && peopleCount <= 9) {
        transportPrice = budget * 0.60;
    } else if (peopleCount >= 10 && peopleCount <= 24) {
        transportPrice = budget * 0.5;
    } else if (peopleCount >= 25 && peopleCount <= 49) {
        transportPrice = budget * 0.4
    } else if (peopleCount >= 50) {
        transportPrice = budget * 0.25;
    }

    if (type === "Normal") {
        price = peopleCount * normalPrice
    } else if (type === "VIP") {
        price = peopleCount * vipPrice
    }
    let totalMoney = transportPrice + price;
    let diff = Math.abs(budget - totalMoney)

    if (budget >= totalMoney) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    } else if (budget < totalMoney) {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }

}
match(["1000", "Normal", "1"]);
match(["30000", "VIP", "49"])