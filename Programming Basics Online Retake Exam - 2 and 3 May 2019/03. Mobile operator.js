function mobile(data) {
    let period = data[0];
    let type = data[1];
    let addedInternet = data[2];
    let monthsCount = Number(data[3]);

    let price = 0;

    switch (period) {
        case 'one':
            switch (type) {
                case 'Small':
                    price = 9.98;
                    break;
                case 'Middle':
                    price = 18.99;
                    break;
                case 'Large':
                    price = 25.98;
                    break;
                case 'ExtraLarge':
                    price = 35.99;
                    break;
            }
            break;

        case 'two':
            switch (type) {
                case 'Small':
                    price = 8.58;
                    break;
                case 'Middle':
                    price = 17.09;
                    break;
                case 'Large':
                    price = 23.59;
                    break;
                case 'ExtraLarge':
                    price = 31.79;
                    break;
            }
            break;
    }



    if (addedInternet === "yes" && price <= 10) {
        price += 5.50;
    } else if (addedInternet === "yes" && price <= 30) {
        price += 4.35;
    } else if (addedInternet === "yes" && price > 30) {
        price += 3.85;
    }
    if (period === "two") {
        price = price - (price * (3.75 / 100))
    }


    let totalPrice = price * monthsCount;
    console.log(`${totalPrice.toFixed(2)} lv.`)

}
mobile(["one",
    "Small",
    "yes",
    "10"])
console.log("____________________")
mobile(["two",
    "Large",
    "no",
    "10"])
console.log("____________________")
mobile(["two",
    "ExtraLarge",
    "yes",
    "20"])
console.log("____________________")
mobile(["two",
    "Small",
    "yes",
    "20"])
