function skiTrip(data) {

    let days = Number(data[0]);
    let type = data[1];
    let rating = data[2];
    let roomForOnePersonPrice = 18;
    let apartmentPrice = 25;
    let presidentApartment = 35;
    let nights = days - 1;
    let price = 0;

    if (type === 'room for one person') {
        price = nights * roomForOnePersonPrice;
    } else if (type === 'apartment') {
        price = nights * apartmentPrice;
        if (nights < 10) {
            price *= 0.7
        } else if (nights >= 10 && nights < 15) {
            price *= 0.65
        } else if (nights > 15) {
            price *= 0.5
        }
    } else if (type === 'president apartment') {
        price = nights * presidentApartment;
        if (nights < 10) {
            price *= 0.9
        } else if (nights >= 10 && nights < 15) {
            price *= 0.85
        } else if (nights > 15) {
            price *= 0.8
        }
    }

    if (rating === 'positive') {
        price = price * 1.25;
    } else {
        price = price * 0.9;
    }
    console.log(`${price.toFixed(2)}`)


}
skiTrip(["14", "apartment", "positive"])
skiTrip(["30", "president apartment", "negative"])
skiTrip(["12", "room for one person", "positive"])
skiTrip(["2", "apartment", "positive"])
