function toyShop(data) {
    let discount = 0;
    let puzzlePrice = 2.60;
    let dollPrice = 3;
    let teddyBearPrice = 4.10;
    let minonPrice = 8.20;
    let truckPrice = 2;

    let tripPrice = Number(data[0]);
    let puzzleCount = Number(data[1]);
    let dollCount = Number(data[2]);
    let teddyBearCount = Number(data[3]);
    let minonCount = Number(data[4]);
    let truckCount = Number(data[5]);

    let totalPuzzlePrice = puzzlePrice * puzzleCount;
    let totalDollPrice = dollPrice * dollCount;
    let totalTeddyBearPrice = teddyBearPrice * teddyBearCount;
    let totalMinonPrice = minonPrice * minonCount;
    let totalTruckPrice = truckPrice * truckCount;

    let totalPrice = totalPuzzlePrice + totalDollPrice + totalTeddyBearPrice + totalMinonPrice + totalTruckPrice;

    let totalToysCount = puzzleCount + dollCount + teddyBearCount + minonCount + truckCount;

    if (totalToysCount >= 50) {
        discount = totalPrice * 0.25;
    } else {
        discount = 0
    }

    let finalMoney = totalPrice - discount;
    let rent = finalMoney * 0.1;
    let leftMoney = finalMoney - rent;

    if (leftMoney >= tripPrice) {
        console.log(`Yes! ${(leftMoney - tripPrice).toFixed(2)} lv left.`)
    } else if (leftMoney < tripPrice) {
        let moneyNeeded = Math.abs(tripPrice - leftMoney);
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }

}
console.log("__________")
toyShop(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"])
console.log("__________________")
toyShop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])
