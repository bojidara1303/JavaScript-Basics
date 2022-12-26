function logistics(data) {
    let cargoCount = Number(data[0]);
    let busCounter = 0;
    let truckCounter = 0;
    let trainCounter = 0;
    let totalWeigth = 0;

    let busCargo = 0;
    let truckCargo = 0;
    let trainCargo = 0;

    for (let i = 1; i <= cargoCount; i++) {
        let cargoTones = Number(data[i])

        if (cargoTones <= 3) {
            busCounter++;
            busCargo += cargoTones;
        } else if (cargoTones >= 4 && cargoTones <= 11) {
            truckCounter++;
            truckCargo += cargoTones;
        } else if (cargoTones >= 12) {
            trainCounter++;
            trainCargo += cargoTones;
        }
        totalWeigth += cargoTones;
    }

    let avgPrice = (busCargo * 200 + truckCargo * 175 + trainCargo * 120) / totalWeigth;
    let busPercent = busCargo / totalWeigth * 100;
    let truckPercent = truckCargo / totalWeigth * 100;
    let trainPercent = trainCargo / totalWeigth * 100;

    console.log(`${avgPrice.toFixed(2)}`);
    console.log(`${busPercent.toFixed(2)}%`);
    console.log(`${truckPercent.toFixed(2)}%`);
    console.log(`${trainPercent.toFixed(2)}%`);
}
logistics(["4", "1", "5", "16", "3"])
console.log("_______________")
logistics(["5", "2", "10", "20", "1", "7"])