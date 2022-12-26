function miningRig(input) {
    let pricePerVideoCard = Number(input[0]);
    let pricePerDevice = Number(input[1]);
    let electricityPricePerDay = Number(input[2]);
    let incomePerCardPerDay = Number(input[3])
    let otherComponents = 1000;

    let cardsCount = 13;
    let devicesCount = 13;

    let totalCardPrice = cardsCount * pricePerVideoCard;
    let totalDevicesPrice = devicesCount * pricePerDevice;
    let totalSpentMoney = totalCardPrice + totalDevicesPrice + otherComponents;
    let moneyEarnedPerDayPerCard = incomePerCardPerDay - electricityPricePerDay;
    let totalMoneyPerDay = moneyEarnedPerDayPerCard * cardsCount;
    let daysNeeded = totalSpentMoney / totalMoneyPerDay;

    console.log(totalSpentMoney)
    console.log(Math.ceil(daysNeeded))

}
miningRig(["700", "15", "0.20", "2"])
