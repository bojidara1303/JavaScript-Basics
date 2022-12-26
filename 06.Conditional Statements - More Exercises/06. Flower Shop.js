function flowers(data) {

    let magnoliaCount = Number(data[0]);
    let hyacinthCount = Number(data[1]);
    let rosesCount = Number(data[2]);
    let cactusCount = Number(data[3]);
    let presentPrice = Number(data[4]);

    let magnoliaPrice = 3.25;
    let hyacinthPrice = 4;
    let rosePrice = 3.50;
    let cactusPrice = 8;

    let totalFlowerPrice = (magnoliaCount * magnoliaPrice) + (hyacinthCount * hyacinthPrice) + (rosesCount * rosePrice) + (cactusCount * cactusPrice);
    let tax = 0.05 * totalFlowerPrice;
    let finalPrice = totalFlowerPrice - tax;
    
    if(finalPrice >= presentPrice){
        let diff = finalPrice - presentPrice;
        console.log(`She is left with ${Math.floor(diff)} leva.`)
    } else {
        let moneyNeeded = Math.abs(finalPrice - presentPrice);
        console.log(`She will have to borrow ${Math.ceil(moneyNeeded)} leva.`)
    }
}
flowers(["2", "3", "5", "1", "50"]);
console.log("_____________________");
flowers(["15", "7", "5", "10", "100"]);