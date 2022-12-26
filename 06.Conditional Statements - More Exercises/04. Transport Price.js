function transport(data) {
    let kilometers = Number(data[0]);
    let type = data[1];
    let result;

    let taxiInitPrice = 0.7;
    let taxiDayKmPrice = 0.79;
    let taxiNightKmPrice = 0.90;

    let busKmPrice = 0.09;
    let minimumKmForBus = 20;

    let trainKmPrice = 0.06;
    let minimumKmForTrain = 100;

    switch (type) {
        case 'day':
            if (kilometers >= minimumKmForTrain) {
                result = kilometers * trainKmPrice;
                console.log(result.toFixed(2))
            } else if (kilometers >= minimumKmForBus) {
                result = kilometers * busKmPrice;
                console.log(result.toFixed(2))
            } else if (kilometers < minimumKmForBus) {
                result = (kilometers * taxiDayKmPrice) + taxiInitPrice;
                console.log(result.toFixed(2))
            }
            break;

        case 'night':
            if (kilometers < minimumKmForBus) {
                result = (kilometers * taxiNightKmPrice) + taxiInitPrice;
                console.log(result.toFixed(2))
            } else if (kilometers >= minimumKmForTrain) {
                result = kilometers * trainKmPrice;
                console.log(result.toFixed(2));
            } else if (kilometers >= minimumKmForBus) {
                result = kilometers * busKmPrice;
                console.log(result.toFixed(2))
            }
            break;
    }

}
transport(["5", "day"])
transport(["7", "night"])
transport(["25", "day"])
transport(["180", "night"])