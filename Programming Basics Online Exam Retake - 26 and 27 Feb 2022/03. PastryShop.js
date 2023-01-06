function pastryShop(input) {
    let typeSweet = input[0];
    let countSweet = Number(input[1]);
    let day = Number(input[2]);
    let price = 0;

    switch (typeSweet) {
        case 'Cake':
            if (day <= 15) {
                price = 24 * countSweet;
            } else if (day > 15) {
                price = 28.70 * countSweet;
            }
            break;

            case 'Baklava':
                if (day <= 15) {
                    price = 12.60 * countSweet;
                } else if (day > 15) {
                    price = 16.98 * countSweet;
                }
                break;

        case 'Souffle':
            if (day <= 15) {
                price = 6.66 * countSweet;
            } else if (day > 15) {
                price = 9.80 * countSweet;
            }
            break;
    }
    if (day <= 22 && price >= 100 && price < 200) {
        price = price * 0.85;
    } else if (day <= 22 && price >= 200) {
        price = price * 0.75;
    }

    if (day <= 15) {
        price = price - (price * 0.10)
    }

    console.log(price.toFixed(2))
}
pastryShop(["Cake",
    "10",
    "15"])
pastryShop(["Souffle",
    "20",
    "24"])
pastryShop(["Baklava",
    "50",
    "1"])
pastryShop(["Cake",
    "5",
    "12"])
