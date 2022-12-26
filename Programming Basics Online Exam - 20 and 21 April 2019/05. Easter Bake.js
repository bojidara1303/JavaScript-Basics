function easterBake(data) {
    let sugarGrPacket = 950;
    let flourGrPacket = 750;

    let countBread = Number(data[0])
    let sugarCounter = 0;
    let flourCounter = 0;
    let maxSugar = 0;
    let maxFlour = 0;

    let index = 0;
    index++;
    
    while (countBread > 0) {
        let sugarNeeded = Number(data[index])
        index++;
        sugarCounter += sugarNeeded;
        if (sugarNeeded > maxSugar) {
            maxSugar = sugarNeeded;
        }
        let flourNeeded = Number(data[index]);
        index++;
        flourCounter += flourNeeded;
        if (flourNeeded > maxFlour) {
            maxFlour = flourNeeded;
        }
        countBread--;

    }
    index++;

    let sugarPackNeeded = Math.ceil(sugarCounter / sugarGrPacket);
    let flourPackNeeded = Math.ceil(flourCounter / flourGrPacket);

    console.log(`Sugar: ${sugarPackNeeded}`)
    console.log(`Flour: ${flourPackNeeded}`)
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`)
}
easterBake(["3",
    "400",
    "350",
    "250",
    "300",
    "450",
    "380"])
console.log("________________")
easterBake(["4",
    "500",
    "350",
    "560",
    "430",
    "600",
    "345",
    "578",
    "543"])
