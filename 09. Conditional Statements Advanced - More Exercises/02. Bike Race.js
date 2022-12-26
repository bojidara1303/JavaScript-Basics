function bike(data) {

    let juniorCount = Number(data[0]);
    let seniorCount = Number(data[1]);
    let type = data[2];
    let juniorTotalPrice = 0
    let seniorTotalPrice = 0;

    switch (type) {
        case 'trail':
            juniorTotalPrice = juniorCount * 5.50;
            seniorTotalPrice = seniorCount * 7;

            break;

        case 'cross-country':
            juniorTotalPrice = juniorCount * 8;
            seniorTotalPrice = seniorCount * 9.50;
            break;

        case 'downhill':
            juniorTotalPrice = juniorCount * 12.25;
            seniorTotalPrice = seniorCount * 13.75;
            break;

        case 'road':
            juniorTotalPrice = juniorCount * 20;
            seniorTotalPrice = seniorCount * 21.50;
            break;
    }
    let totalPrice = juniorTotalPrice + seniorTotalPrice;
    
    if ((juniorCount + seniorCount) >= 50 && type === 'cross-country') {
        totalPrice = totalPrice * 0.75;
    }

    let taxPrice = totalPrice*0.05;
    let finalPrice = totalPrice - taxPrice;

    console.log(`${finalPrice.toFixed(2)}`)

}
bike(["10", "20", "trail"]);
bike(["21", "26", "cross-country"]);
bike(["30", "25", "cross-country"]);
bike(["10", "10", "downhill"]);
bike(["3", "40", "road"]);
