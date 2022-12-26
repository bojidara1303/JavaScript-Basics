function snooker(data) {
    let stage = data[0];
    let ticketType = data[1];
    let ticketsCount = Number(data[2]);
    let photos = data[3];
    let price = 0;
    

    switch (stage) {
        case 'Quarter final':
            switch (ticketType) {
                case 'Standard':
                    price = 55.50 * ticketsCount;
                    break;
                case 'Premium':
                    price = 105.20 * ticketsCount;
                    break;
                case 'VIP':
                    price = 118.90 * ticketsCount;
                    break;
            }
            break;
        case 'Semi final':
            switch (ticketType) {
                case 'Standard':
                    price = 75.88 * ticketsCount;
                    break;
                case 'Premium':
                    price = 125.22 * ticketsCount;
                    break;
                case 'VIP':
                    price = 300.40 * ticketsCount;
                    break;
            }
            break;

        case 'Final':
            switch (ticketType) {
                case 'Standard':
                    price = 110.10 * ticketsCount;
                    break;
                case 'Premium':
                    price = 160.66 * ticketsCount;
                    break;
                case 'VIP':
                    price = 400 * ticketsCount;
                    break;
            }
            break;
    }
    let moneyForPhotos = ticketsCount * 40;
    if (price > 4000) {
        price *= 0.75;
        moneyForPhotos = 0;
    } else if (price >=2500) {
        price *= 0.90;
    }


    switch (photos) {
        case 'Y':
            price += moneyForPhotos;
            break;

        case 'N':
            price = price;
            break;
    }
    console.log(`${price.toFixed(2)}`)
}
snooker(["Final",
    "Premium",
    "25",
    "Y"])
snooker(["Semi final",
    "VIP",
    "9",
    "Y"])
snooker(["Quarter final",
    "Standard",
    "11",
    "N"])
