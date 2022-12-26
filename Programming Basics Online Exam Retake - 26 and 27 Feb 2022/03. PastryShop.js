function pastryShop(data) {
    let type = data[0];
    let count = Number(data[1]);
    let day = Number(data[2]);
    let price = 0;

    switch (type) {
        case 'Cake':
            if (day <= 15) {
                price = 24 * count;
            } else if (day > 15) {
                price = 28.70 * count;
            }
            break;

        case 'Souffle':
            if (day <= 15) {
                price = 6.66 * count;
            } else if (day > 15) {
                price = 9.80 * count;
            }
            break;

        case 'Baklava':
            if (day <= 15) {
                price = 12.60 * count;
            } else if (day > 15) {
                price = 16.98 * count;
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
