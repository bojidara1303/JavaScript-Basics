function repaining(data) {

    let nylonPerSqMeter = 1.5;
    let paintPerLiter = 14.50;
    let thinnerPerLiter = 5;

    let nylonNeededSqMeter = Number(data[0]);
    let paintNeededLiters = Number(data[1]);
    let litersThinnerLiters = Number(data[2]);
    let hours = Number(data[3]);

    let extraPaintLiters = paintNeededLiters * 0.1;
    let extraNylonSqMeters = 2;
    let bags = 0.4;

    let totalNylonPrice = (nylonNeededSqMeter + extraNylonSqMeters) * nylonPerSqMeter;
    let totalPaintPrice = (paintNeededLiters + extraPaintLiters) * paintPerLiter;
    let totalThinnerPrice = litersThinnerLiters * thinnerPerLiter;
    let totalPrice = totalNylonPrice + totalPaintPrice + totalThinnerPrice + bags;
    let workersMoney = (totalPrice * 0.3) * hours;
    let totalMoneyNeeded = totalPrice + workersMoney;

    console.log(totalMoneyNeeded)

}
repaining(["10 ", "11 ", "4 ", "8 "])