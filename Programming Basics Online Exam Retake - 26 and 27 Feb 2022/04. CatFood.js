function catFood(data) {
    let pricePerKgFood = 12.45;

    let catsCount = Number(data[0]);
    let groupOne = 0;
    let groupTwo = 0;
    let groupThree = 0;
    let sum = 0;

    for (let i = 0; i <= catsCount; i++) {
        let grams = Number(data[i]);

        if (grams >= 100 && grams < 200) {
            groupOne++;
            sum += grams;
        } else if (grams >= 200 && grams < 300) {
            groupTwo++;
            sum += grams;
        } else if (grams >= 300 && grams < 400) {
            groupThree++;
            sum += grams;
        }
    }

    let moneyForFood = (sum / 1000) * pricePerKgFood
    console.log(`Group 1: ${groupOne} cats.`);
    console.log(`Group 2: ${groupTwo} cats.`);
    console.log(`Group 3: ${groupThree} cats.`);
    console.log(`Price for food per day: ${moneyForFood.toFixed(2)} lv.`)
}
catFood(["6",
    "102",
    "236",
    "123",
    "399",
    "342",
    "222"])
console.log("___________________")
catFood(["10",
    "256",
    "348",
    "198",
    "322",
    "186",
    "294",
    "321",
    "100",
    "200",
    "300"])
console.log("___________________")
catFood(["7",
    "100",
    "200",
    "342",
    "300",
    "234",
    "123",
    "212"])
