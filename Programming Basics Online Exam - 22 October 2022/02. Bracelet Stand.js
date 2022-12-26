function braceletStand(data) {

    let budget = Number(data[0]);
    let moneyPerDay = Number(data[1]);
    let expenses = Number(data[2]);
    let giftPrice = Number(data[3])
    let days = 5;

    let totalSavedMoney = days * budget;
    let totalEarnedMoney = days * moneyPerDay;
    let totalMoney = totalEarnedMoney + totalSavedMoney;
    let moneyLeft = totalMoney - expenses;

    let diff = Math.abs(moneyLeft - giftPrice)
    if (moneyLeft >= giftPrice) {
        console.log(`Profit: ${moneyLeft.toFixed(2)} BGN, the gift has been purchased.`)
    } else {
        console.log(`Insufficient money: ${diff.toFixed(2)} BGN.`)
    }


}
braceletStand(["5.12",
    "32.05",
    "15",
    "150"])
braceletStand(["2.10",
    "17.50",
    "20.20",
    "148.50"])
