function shopping(data) {
    let discount;
    let moneyNeeded;
    let diff;
    let budget = Number(data[0]);
    let videocardsCount = Number(data[1]);
    let processorsCount = Number(data[2]);
    let ramCount = Number(data[3]);

    let videocardPrice = 250;
    let moneyForVideocards = videocardsCount * videocardPrice;
    let processorPrice = moneyForVideocards * 0.35;
    let totalMoneyForProcessors = processorPrice * processorsCount;
    let ramPricePerOne = moneyForVideocards * 0.10;
    let totalMoneyForRam = ramPricePerOne * ramCount;
    let totalMoney = moneyForVideocards + totalMoneyForProcessors + totalMoneyForRam;

    if (videocardsCount > processorsCount) {
        discount = 0.15 * totalMoney;
        totalMoney = totalMoney - discount
    }
    if (budget >= totalMoney) {
        diff = budget - totalMoney;
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    } else if (budget < totalMoney) {
        moneyNeeded = Math.abs(budget - totalMoney);
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
    }

}
shopping(["900",
    "2",
    "1",
    "3"])
console.log("______________")
shopping(["920.45",
    "3",
    "1",
    "1"])

