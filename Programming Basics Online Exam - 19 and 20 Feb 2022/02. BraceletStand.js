function bracelet(data) {
    let moneyPerDay = Number(data[0]);
    let earnedMoneyperDay = Number(data[1]);
    let totalExpenses = Number(data[2]);
    let giftPrice = Number(data[3]);
    let days = 5;

    let totalMoney = (moneyPerDay + earnedMoneyperDay) * days;
    let moneyLeft = totalMoney - totalExpenses;


    let diff = Math.abs(giftPrice - moneyLeft)
    if (moneyLeft >= giftPrice) {
        console.log(`Profit: ${moneyLeft.toFixed(2)} BGN, the gift has been purchased.`)
    } else if (giftPrice > moneyLeft) {
        console.log(`Insufficient money: ${diff.toFixed(2)} BGN.`)
    }


}
bracelet(["5.12",
    "32.05",
    "15",
    "150"])
bracelet(["2.10",
    "17.50",
    "20.20",
    "148.50"])
bracelet(["15.20",
    "200.00",
    "7.30",
    "1500.12"])
