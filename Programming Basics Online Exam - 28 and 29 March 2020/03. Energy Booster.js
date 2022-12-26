function energyBooster(data) {
    let fruit = data[0];
    let size = data[1];
    let setsCount = Number(data[2]);
    let price = 0;

    switch (fruit) {
        case 'Watermelon':
            switch (size) {
                case 'small':
                    price = setsCount * 56 * 2;
                    break;
                case 'big':
                    price = setsCount * 28.70 * 5;
                    break;
            }
            break;
        case 'Mango':
            switch (size) {
                case 'small':
                    price = setsCount * 36.66 * 2;
                    break;
                case 'big':
                    price = setsCount * 19.60 * 5;
                    break;
            }
            break;

        case 'Pineapple':
            switch (size) {
                case 'small':
                    price = setsCount * 42.10 * 2;
                    break;
                case 'big':
                    price = setsCount * 24.80 * 5;
                    break;
            }
            break;
        case 'Raspberry':
            switch (size) {
                case 'small':
                    price = setsCount * 20 * 2;
                    break;
                case 'big':
                    price = setsCount * 15.20 * 5;
                    break;
            }
            break;
    }

    if (price >= 400 && price <= 1000) {
        price = price - (price * 0.15)
    } else if (price > 1000) {
        price = price * 0.50;
    }
    console.log(`${price.toFixed(2)} lv.`)

}
energyBooster(["Watermelon",
    "big",
    "4"])
console.log("_____________")
energyBooster(["Pineapple",
    "small",
    "1"])
console.log("_____________")
energyBooster(["Raspberry",
    "small",
    "50"])
console.log("_____________")
energyBooster(["Mango",
    "big",
    "8"])
