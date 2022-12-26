function school(data) {

    let season = data[0];
    let groupType = data[1];
    let peopleCount = Number(data[2]);
    let nightsCount = Number(data[3]);
    let pricePerNight = 0;
    let totalPrice = 0;
    let sport;

    switch (groupType) {
        case 'boys':
            switch (season) {
                case 'Winter':
                    pricePerNight = 9.60;
                    sport = "Judo";
                    // totalPrice = pricePerNight * nightsCount;
                    break;
                case 'Spring':
                    pricePerNight = 7.20;
                    sport = "Tennis";
                    // totalPrice = pricePerNight * nightsCount * peopleCount;
                    break;
                case 'Summer':
                    pricePerNight = 15;
                    sport = "Football";
                    // totalPrice = pricePerNight * nightsCount * peopleCount;
                    break;
            }
            break;
        case 'girls':
            switch (season) {
                case 'Winter':
                    pricePerNight = 9.60;
                    sport = "Gymnastics";
                    // totalPrice = pricePerNight * nightsCount * peopleCount;
                    break;
                case 'Spring':
                    pricePerNight = 7.20;
                    sport = "Athletics";
                    // totalPrice = pricePerNight * nightsCount * peopleCount;
                    break;
                case 'Summer':
                    pricePerNight = 15;
                    sport = "Volleyball";
                    // totalPrice = pricePerNight * nightsCount * peopleCount;
                    break;
            }
            break;
        case 'mixed':
            switch (season) {
                case 'Winter':
                    pricePerNight = 10;
                    sport = "Ski";
                    // totalPrice = pricePerNight * nightsCount * peopleCount;
                    break;
                case 'Spring':
                    pricePerNight = 9.50;
                    sport = "Cycling";
                    // totalPrice = pricePerNight * nightsCount * peopleCount;
                    break;
                case 'Summer':
                    pricePerNight = 20;
                    sport = "Swimming";
                    // totalPrice = pricePerNight * nightsCount * peopleCount;
                    break;
            }
    }
    totalPrice = pricePerNight * nightsCount * peopleCount;

    if (peopleCount >= 50) {
        totalPrice = totalPrice * 0.5;
    } else if (peopleCount >= 20 && peopleCount < 50) {
        totalPrice = totalPrice * 0.85;
    } else if (peopleCount >= 10 && peopleCount < 20) {
        totalPrice = totalPrice * 0.95;
    }

    console.log(`${sport} ${totalPrice.toFixed(2)} lv.`)
}
school(["Spring", "girls", "20", "7"]);
school(["Winter", "mixed", "9", "15"]);
school(["Summer", "boys", "60", "7"]);
school(["Spring", "mixed", "17", "14"]);

// 100/100