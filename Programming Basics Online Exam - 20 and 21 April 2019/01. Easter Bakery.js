function easterBakery(data) {
    let flourPricePerKg = Number(data[0]);
    let flourKg = Number(data[1]);
    let sugarKg = Number(data[2]);
    let eggsCount = Number(data[3]);
    let yeastPacks = Number(data[4]);
    let sugarKgPrice = flourPricePerKg * 0.75;
    let eggPrice = flourPricePerKg + (flourPricePerKg * 0.1);
    let yeastPackPrice = sugarKgPrice * 0.20;

    let total = flourKg * flourPricePerKg + sugarKg * sugarKgPrice + eggsCount * eggPrice + yeastPackPrice * yeastPacks;
    console.log(total.toFixed(2))



}
easterBakery(["50",
    "10",
    "3.5",
    "6",
    "1"])
easterBakery(["63.44",
    "3.57",
    "6.35",
    "8",
    "2"])
