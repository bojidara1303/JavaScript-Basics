function poolDay(data) {
    let peopleCount = Number(data[0]);
    let entryTax = Number(data[1]);
    let pricePerLounge = Number(data[2]);
    let pricePerUmbrella = Number(data[3]);

    let totalTax = peopleCount * entryTax;
    let loungeNum = Math.ceil(peopleCount * 0.75);
    let umbrellasNeeded = Math.ceil(peopleCount / 2);
    let finalPrice = totalTax + loungeNum * pricePerLounge + umbrellasNeeded * pricePerUmbrella;
    console.log(`${finalPrice.toFixed(2)} lv.`)
}
poolDay(["21",
    "5.50",
    "4.40",
    "6.20"])
poolDay(["50",
    "6",
    "8",
    "4"])
