function journey(data) {

    let budget = Number(data[0]);
    let season = data[1];
    let price = 0;
    let destination;
    let type;

    if (budget <= 100) {
        switch (season) {
            case 'summer':
                destination = "Bulgaria"
                type = "Camp"
                price = budget * 0.3;
                break;
            case 'winter':
                destination = "Bulgaria"
                type = "Hotel"
                price = budget * 0.7;
                break;
        }
    } else if (budget <= 1000) {
        switch (season) {
            case 'summer':
                destination = "Balkans"
                type = "Camp"
                price = budget * 0.4;
                break;
            case 'winter':
                destination = "Balkans"
                type = "Hotel"
                price = budget * 0.8;
                break;
        }
    } else if (budget > 1000) {
        switch (season) {
            case 'summer':
                destination = "Europe"
                type = "Hotel"
                price = budget * 0.9;
                break;
            case 'winter':
                destination = "Europe"
                type = "Hotel"
                price = budget * 0.9;
                break;
        }
    }


console.log(`Somewhere in ${destination}`)
console.log(`${type} - ${price.toFixed(2)}`)

}
journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);
