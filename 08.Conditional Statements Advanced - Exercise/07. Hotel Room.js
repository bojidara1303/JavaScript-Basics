function hotelRoom(data) {
    let month = data[0];
    let nightsCount = Number(data[1]);
    let type;
    let priceForApartment = 0;
    let priceForStudio = 0

    switch (month) {
        case 'May':
        case 'October':
            priceForApartment = nightsCount * 65;
            priceForStudio = nightsCount * 50;
            if (nightsCount > 7 && nightsCount < 14) {
                priceForStudio -= priceForStudio * 0.05;
            } else if (nightsCount > 14) {
                priceForStudio -= priceForStudio * 0.3;
            }

            break;

        case 'June':
        case 'September':
            priceForApartment = nightsCount * 68.70;
            priceForStudio = nightsCount * 75.20;
            if (nightsCount > 14) {
                priceForStudio -= priceForStudio * 0.2;
            }
            break;

        case 'July':
        case 'August':
            priceForApartment = nightsCount * 77;
            priceForStudio = nightsCount * 76;
            break;
    }
    if (nightsCount > 14) {
        priceForApartment -= priceForApartment * 0.1;
    }

    console.log(`Apartment: ${priceForApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceForStudio.toFixed(2)} lv.`)

}
hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"])

