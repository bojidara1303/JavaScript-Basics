function easterTrip(data) {
    let destination = data[0];
    let dates = data[1];
    let nightsCount = Number(data[2]);
    let price = 0;

    switch (destination) {
        case 'France':
            switch (dates) {
                case '21-23':
                    price = nightsCount * 30;
                    break;
                case '24-27':
                    price = nightsCount * 35;
                    break;
                case '28-31':
                    price = nightsCount * 40;
                    break;
            }
            break;

        case 'Italy':
            switch (dates) {
                case '21-23':
                    price = nightsCount * 28;
                    break;
                case '24-27':
                    price = nightsCount * 32;
                    break;
                case '28-31':
                    price = nightsCount * 39;
                    break;
            }
            break;

        case 'Germany':
            switch (dates) {
                case '21-23':
                    price = nightsCount * 32;
                    break;
                case '24-27':
                    price = nightsCount * 37;
                    break;
                case '28-31':
                    price = nightsCount * 43;
                    break;
            }
            break;

    }

console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`)



}
easterTrip(["Germany",
    "24-27",
    "5"])
easterTrip(["Italy",
    "21-23",
    "7"])
easterTrip(["France",
    "28-31",
    "8"])
