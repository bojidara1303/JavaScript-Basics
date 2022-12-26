function christmasGift(data) {
    let toyPrice = 5;
    let pulloverPrice = 15;
    let kidsCounter = 0;
    let adultCounter = 0;

    let index = 0;
    let command = data[index];
    index++;

    while (command !== "Christmas") {
        if (command <= 16) {
            kidsCounter++;
        } else if (command > 16) {
            adultCounter++;
        }
        command = data[index];
        index++;
    }


    let moneyForToys = kidsCounter * toyPrice;
    let moneyForPullovers = adultCounter * pulloverPrice;

    console.log(`Number of adults: ${adultCounter}`);
    console.log(`Number of kids: ${kidsCounter}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForPullovers}`)

}
christmasGift(["16",
    "20",
    "46",
    "12",
    "8",
    "20",
    "49",
    "Christmas"])
console.log("__________________")
christmasGift(["16",
    "16",
    "16",
    "16",
    "16",
    "Christmas"])
console.log("__________________")
christmasGift(["18",
    "20",
    "48",
    "45",
    "56",
    "37",
    "12",
    "14",
    "Christmas"])
