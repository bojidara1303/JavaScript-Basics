function pets(data) {
    let days = Number(data[0]);
    let foodLeft = Number(data[1]);
    let foodForDogPerDayInKg = Number(data[2]);
    let foodForCatPerDayInKg = Number(data[3]);
    let foodForTurtlePerDayInGrams = Number(data[4]);

    let foodForTurtlePerDayInKg = foodForTurtlePerDayInGrams / 1000;
    let totalFoodInKg = (foodForDogPerDayInKg + foodForCatPerDayInKg + foodForTurtlePerDayInKg) * days;

    if (foodLeft >= totalFoodInKg) {
        let diff = foodLeft - totalFoodInKg;
        console.log(`${Math.floor(diff)} kilos of food left.`)
    } else if(foodLeft < totalFoodInKg){
        let foodNeeded = Math.abs(foodLeft - totalFoodInKg);
        console.log(`${Math.ceil(foodNeeded)} more kilos of food are needed.`)
    }
}

pets(["2", "10", "1", "1", "1200"]);
console.log("____________________")
pets(["5", "10", "2.1", "0.8", "321"]);