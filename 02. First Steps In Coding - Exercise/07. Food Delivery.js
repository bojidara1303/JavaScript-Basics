function delivery(data) {

    let chickenMealPrice = 10.35;
    let fishMealPrice = 12.40;
    let veganMealPrice = 8.15;
    let deliveryPrice = 2.50;

    let chickenMealCount = Number(data[0]);
    let fishMealCount = Number(data[1]);
    let veganMealCount = Number(data[2]);
    

    let totalChickenPr = chickenMealPrice * chickenMealCount;
    let totalFishPr = fishMealPrice * fishMealCount;
    let totalVeganPr = veganMealPrice * veganMealCount;
    let totalMoney = totalChickenPr + totalFishPr + totalVeganPr;
    let dessert = 0.2 * totalMoney;
    let finalMoney = totalMoney + dessert + deliveryPrice;

    console.log(finalMoney)

}
delivery(["2 ", "4 ", "3 "])