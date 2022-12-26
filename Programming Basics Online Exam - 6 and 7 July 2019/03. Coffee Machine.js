function coffeeMachine(data) {

    let coffeeType = data[0];
    let sugarType = data[1];
    let drinksCount = Number(data[2]);
    let price = 0;

    switch (coffeeType) {
        case 'Espresso':
            if (sugarType === 'Without') {
                price = drinksCount * 0.9 * 0.65;
                if (drinksCount > 5) {
                    price = price * 0.75;
                }
            } else if (sugarType === 'Normal') {
                price = drinksCount * 1;
                if (drinksCount > 5) {
                    price = price * 0.75;
                }
            } else if (sugarType === 'Extra') {
                price = drinksCount * 1.2;
                if (drinksCount > 5) {
                    price = price * 0.75;
                }
            }
            break;

        case 'Cappuccino':
            if (sugarType === 'Without') {
                price = drinksCount * 1 * 0.65;
            } else if (sugarType === 'Normal') {
                price = drinksCount * 1.20;
            } else if (sugarType === 'Extra') {
                price = drinksCount * 1.60;
            }
            break;

        case 'Tea':
            if (sugarType === 'Without') {
                price = drinksCount * 0.5 * 0.65;
            } else if (sugarType === 'Normal') {
                price = drinksCount * 0.6;
            } else if (sugarType === 'Extra') {
                price = drinksCount * 0.7;
            }
            break;
    }

    if (price > 15) {
        price = price * 0.8
    }
    console.log(`You bought ${drinksCount} cups of ${coffeeType} for ${price.toFixed(2)} lv.`)

}
coffeeMachine(["Espresso",
    "Without",
    "10"])
coffeeMachine(["Cappuccino",
    "Normal",
    "13"])
coffeeMachine(["Tea",
    "Extra",
    "3"])
