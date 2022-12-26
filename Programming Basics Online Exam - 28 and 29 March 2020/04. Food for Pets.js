function food(data) {
    let days = Number(data[0]);
    let totalFoodInGrams = Number(data[1]);
    let index = 2;
    let command = data[index];

    let eatenByDog = 0;
    let eatenByCat = 0;
    let daysCount = 1;
    let biscuit = 0;
    let foodPerDay;
    let dog;
    let cat;

    while (days >= daysCount) {
        foodPerDay = 0;
        dog = Number(data[index]);
        index++;
        eatenByDog += dog;
        foodPerDay += dog;

        cat = Number(data[index])
        eatenByCat += cat;
        foodPerDay += cat;

        if (daysCount % 3 === 0) {
            biscuit += foodPerDay * 0.10
        }

        daysCount++;
        index++;
        command = data[index];
    }
    let eatenFood = eatenByDog + eatenByCat;
    let eatenFoodPercent = (eatenFood / totalFoodInGrams) * 100;
    let eatenByDogPercent = (eatenByDog / eatenFood) * 100;
    let eatenByCatPercent = (eatenByCat / eatenFood) * 100;

    console.log(`Total eaten biscuits: ${Math.ceil(biscuit.toFixed())}gr.`)
    console.log(`${eatenFoodPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${eatenByDogPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${eatenByCatPercent.toFixed(2)}% eaten from the cat.`)
}

food(["3", "1000", "300", "20", "100", "30", "110", "40"])
console.log("_____________________________")
food(["3", "500", "100", "30", "110", "25", "120", "35"])

//66/100