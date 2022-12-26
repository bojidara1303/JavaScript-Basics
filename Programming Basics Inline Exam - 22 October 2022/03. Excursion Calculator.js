function excursionCalculator(data) {

    let peopleCount = Number(data[0]);
    let season = data[1];
    let totalPrice = 0;

    switch (season) {
        case 'spring':
            if (peopleCount <= 5) {
                totalPrice = peopleCount * 50;
            } else if (peopleCount > 5) {
                totalPrice = peopleCount * 48;
            }
            break;

        case 'summer':
            if (peopleCount <= 5) {
                totalPrice = peopleCount * 48.50;
            } else if (peopleCount > 5) {
                totalPrice = peopleCount * 45;
            }
            break;

        case 'autumn':
            if (peopleCount <= 5) {
                totalPrice = peopleCount * 60;
            } else if (peopleCount > 5) {
                totalPrice = peopleCount * 49.50;
            }
            break;

        case 'winter':
            if (peopleCount <= 5) {
                totalPrice = peopleCount * 86;
            } else if (peopleCount > 5) {
                totalPrice = peopleCount * 85;
            }
            break;
    }
    if (season === "summer") {
        totalPrice *= 0.85;
    }
    if (season === "winter") {
        totalPrice += (totalPrice * 0.08);
    }

    console.log(`${totalPrice.toFixed(2)} leva.`)


}
excursionCalculator(["5", "spring"]);
excursionCalculator(["10", "summer"]);
excursionCalculator(["15", "autumn"]);
excursionCalculator(["20", "winter"]);



