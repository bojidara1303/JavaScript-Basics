function vacation(data) {

    let budget = Number(data[0]);
    let season = data[1];
    let place;
    let type;
    let price = 0;

    if (budget <= 1000) {
        type = "Camp"
        if (season === "Summer") {
            price = budget * 0.65;
            place = "Alaska"
        } else if (season === 'Winter') {
            price = budget * 0.45;
            place = "Morocco"
        }
    } else if (budget > 1000 && budget <= 3000) {
        type = "Hut"
        if (season === "Summer") {
            price = budget * 0.8;
            place = "Alaska"
        } else if (season === 'Winter') {
            price = budget * 0.6;
            place = "Morocco"
        }
    } else if (budget > 3000) {
        type = "Hotel"
        price = budget * 0.9;
        if (season === "Summer") {
            place = "Alaska"
        } else if (season === "Winter") {
            place = "Morocco"
        }
    }
    console.log(`${place} - ${type} - ${price.toFixed(2)}`)
}
vacation(["800", "Summer"]);
vacation(["799.50", "Winter"]);
vacation(["3460", "Summer"]);
vacation(["1100", "Summer"]);
vacation(["5000", "Winter"]);
vacation(["2543.99", "Winter"]);