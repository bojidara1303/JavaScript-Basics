function fruitMarket(data1, data2, data3, data4, data5) {
    let strawberriesPricePerKg = Number(data1);
    let bananasKg = Number(data2);
    let orangesKg = Number(data3);
    let raspberriesKg = Number(data4);
    let strawberriesKg = Number(data5);
    let raspderriesPricePerKg = strawberriesPricePerKg * 0.5;
    let orangesPricePerKg = raspderriesPricePerKg - (raspderriesPricePerKg * 0.4);
    let bananasPricePerKg = raspderriesPricePerKg - (raspderriesPricePerKg * 0.8);

    let strawberries = strawberriesPricePerKg * strawberriesKg;
    let bananas = bananasKg * bananasPricePerKg;
    let raspberries = raspderriesPricePerKg * raspberriesKg;
    let oranges = orangesKg * orangesPricePerKg;
    let totalMoney = strawberries + bananas + raspberries + oranges;
    console.log(totalMoney.toFixed(2))

}
fruitMarket(48,
    10,
    3.3,
    6.5,
    1.7)
fruitMarket(63.5,
    3.57,
    6.35,
    8.15,
    2.5)
  

