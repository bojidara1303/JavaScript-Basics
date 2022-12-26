function safari(data) {
    let budget = Number(data[0]);
    let litersPetrolNeeded = Number(data[1]);
    let day = data[2]
    let guidePrice = 100;
    let literPetrolPrice = 2.10;
    let price = 0;

    if (day === "Saturday") {
        price = litersPetrolNeeded * literPetrolPrice + guidePrice;
        price = price * 0.9;
    } else if (day === "Sunday") {
        price = litersPetrolNeeded * literPetrolPrice + guidePrice;
        price = price * 0.8;
    }
    let diff = Math.abs(budget - price)
    if (budget >= price) {
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`)
    } else if (budget < price) {
        console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`)
    }
}
safari(["1000",
    "10",
    "Sunday"])
console.log("_________________")
safari(["120",
    "30",
    "Saturday"])
console.log("_________________")
safari(["105.20",
    "15",
    "Sunday"])

