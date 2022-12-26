function carToGo(data) {

    let budget = Number(data[0]);
    let season = data[1];
    let classCar;
    let type;
    let price = 0;

    if (budget <= 100) {
        classCar = "Economy class"
        if (season === "Summer") {
            type = "Cabrio"
            price = budget * 0.35;
        } if (season === 'Winter') {
            type = "Jeep"
            price = budget * 0.65;
        }
    } else if (budget > 100 && budget <= 500) {
        classCar = "Compact class"
        if (season === "Summer") {
            type = "Cabrio"
            price = budget * 0.45;
        } if (season === 'Winter') {
            type = "Jeep"
            price = budget * 0.80;
        }
    } else if (budget > 500) {
        classCar = "Luxury class"
        if (season === "Summer" || season === 'Winter') {
            type = "Jeep"
            price = budget * 0.9;
        }
    }
    console.log(`${classCar}`);
    console.log(`${type} - ${price.toFixed(2)}`)

}
carToGo(["450", "Summer"]);
console.log("________________")
carToGo(["450", "Winter"]);
console.log("________________")
carToGo(["1010", "Summer"]);
console.log("________________")
carToGo(["99.99", "Summer"]);
console.log("________________")
carToGo(["1010", "Winter"]);
console.log("________________")
carToGo(["70.50", "Winter"]);