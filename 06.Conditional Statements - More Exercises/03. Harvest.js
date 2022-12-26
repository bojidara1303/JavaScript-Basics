function harvest(data) {

    let areaOfVineyard = Number(data[0]);
    let grapePerSqMeter = Number(data[1]);
    let wineNeededInLt = Number(data[2]);
    let workersCount = Number(data[3]);

    let kgGrapePerLiter = 2.5;
    let totalGrapeProduced = areaOfVineyard * grapePerSqMeter;
    let grapeForWine = totalGrapeProduced * 0.4;
    let totalLitersWine = grapeForWine / kgGrapePerLiter;

    if (totalLitersWine >= wineNeededInLt) {
        let diff = totalLitersWine - wineNeededInLt;
        let winePerWorker = diff / workersCount;
        console.log(`Good harvest this year! Total wine: ${Math.ceil(totalLitersWine)} liters.`)
        console.log(`${diff} liters left -> ${Math.ceil(winePerWorker)} liters per person.`)
    } else {
        let wineNeeded = Math.abs(totalLitersWine - wineNeededInLt)
        console.log(`It will be a tough winter! More ${Math.floor(wineNeeded)} liters wine needed.`)
    }
}
harvest(["650", "2", "175", "3"]);
console.log("_______________")
harvest(["1020", "1.5", "425", "4"]);