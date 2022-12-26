function movieDestination(data) {
    let budget = Number(data[0]);
    let destination = data[1];
    let season = data[2];
    let days = Number(data[3]);
    let price = 0;

    switch (destination) {
        case 'Dubai':
            if (season === 'Winter') {
                price = days * 45000;
            } else if (season === 'Summer') {
                price = days * 40000;
            }
            break;

        case 'Sofia':
            if (season === 'Winter') {
                price = days * 17000;
            } else if (season === 'Summer') {
                price = days * 12500;
            }
            break;

        case 'London':
            if (season === 'Winter') {
                price = days * 24000;
            } else if (season === 'Summer') {
                price = days * 20250;
            }
            break;
    }
    if (destination === "Dubai") {
        price = price * 0.7;
    } else if (destination === "Sofia") {
        price = price + (price * 0.25)
    }

    let diff = Math.abs(budget - price)
    if (budget >= price) {
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`)
    } else if (budget < price) {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`)
    }


}
movieDestination(["400000",
    "Sofia",
    "Winter",
    "20"])
movieDestination(["1000000",
    "Dubai",
    "Summer",
    "5"])
movieDestination(["200000",
    "London",
    "Summer",
    "7"])
