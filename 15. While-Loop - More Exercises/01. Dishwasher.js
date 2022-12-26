function dishwasher(data) {
    let bottlesCount = Number(data[0]);

    let bottleMl = 750;
    let liquidPerDish = 5;
    let liquidPerPot = 15;
    let dishesCount = 0;
    let potsCount = 0;

    let index = 1;
    let command = data[index];
    let totalDetergent = bottlesCount * bottleMl;

    while (command) {
        if(command === "End"){
            break;
        }
        let count = Number(command);
        if (index % 3 === 0) {
            potsCount += count;
            totalDetergent -= count * liquidPerPot;
        } else {
            dishesCount += count;
            totalDetergent -= count * liquidPerDish;
        }
        index++;
        command = data[index];
    }

    if(totalDetergent>=0){
        console.log("Detergent was enough!");
        console.log(`${dishesCount} dishes and ${potsCount} pots were washed.`);
        console.log(`Leftover detergent ${totalDetergent} ml.`)
    } else {
        console.log(`Not enough detergent, ${Math.abs(totalDetergent)} ml. more necessary!`)
    }
}
dishwasher(["2", "53", "65", "55", "End"])
console.log("________________________")
dishwasher(["1", "10", "15", "10", "12", "13", "30"])