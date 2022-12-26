function excursion(data) {
    let countOfPeople = Number(data[0]);
    let season = data[1];
    let price = 0;

    switch (season) {
        case 'spring':
            if (countOfPeople <= 5) {
                price = countOfPeople * 50;
            } else if (countOfPeople > 5) {
                price = countOfPeople * 48
            }
            break;

        case 'summer':
            if (countOfPeople <= 5) {
                price = countOfPeople * 48.50;
            } else if (countOfPeople > 5) {
                price = countOfPeople * 45;
            }
            price = price * 0.85;
            break;

        case 'autumn':
            if (countOfPeople <= 5) {
                price = countOfPeople * 60;
            } else if (countOfPeople > 5) {
                price = countOfPeople * 49.50;
            }
            break;

        case 'winter':
            if (countOfPeople <= 5) {
                price = countOfPeople * 86;
            } else if (countOfPeople > 5) {
                price = countOfPeople * 85;
            }
            price = price + (price * 0.08)
            break;
    }

console.log(`${price.toFixed(2)} leva.`)

}
excursion(["5",
    "spring"])
excursion(["10",
    "summer"])
excursion(["15",
    "autumn"])
excursion(["20",
    "winter"])
