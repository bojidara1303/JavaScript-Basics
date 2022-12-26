function football(data) {
    let stadiumCapacity = Number(data[0]);
    let fansCount = Number(data[1]);

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let i = 2; i <= fansCount + 1; i++) {
        let fan = data[i];
        if (fan === "A") {
            sectorA++;
        } else if (fan === "B") {
            sectorB++;
        } else if (fan === "V") {
            sectorV++;
        } else if (fan === "G") {
            sectorG++;
        }
    }
    let sectorAPercent = sectorA / fansCount * 100;
    let sectorBPercent = sectorB / fansCount * 100;
    let sectorVPercent = sectorV / fansCount * 100;
    let sectorGPercent = sectorG / fansCount * 100;
    let all = fansCount / stadiumCapacity * 100;

    console.log(`${sectorAPercent.toFixed(2)}%`);
    console.log(`${sectorBPercent.toFixed(2)}%`);
    console.log(`${sectorVPercent.toFixed(2)}%`);
    console.log(`${sectorGPercent.toFixed(2)}%`);
    console.log(`${all.toFixed(2)}%`);
}
football(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
console.log("_________________________")
football(["93", "16", "A", "V", "G", "G", "B", "B", "G", "B", "A", "B", "B", "B", "A", "B", "B", "A"]);