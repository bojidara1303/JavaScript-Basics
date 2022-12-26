function petShop(data) {

    let dogFoodPrice = 2.50;
    let catFoodPrice = 4;

    let dogFoodPacks = Number(data[0]);
    let catFoodPacks = Number(data[1]);

    let finalPrice = (dogFoodPacks * dogFoodPrice) + (catFoodPacks * catFoodPrice)
    console.log(finalPrice)

}
petShop(["5 ", "4 "])