function puppy(data) {
    let index = 0;
    let initialFood = Number(data[index]) * 1000;
    index++;
    let eatenFood = 0;

    while (data[index] !== "Adopted") {
        let currentFood = Number(data[index]);
        eatenFood += currentFood;
        index++;
    }

    let diff = Math.abs(initialFood - eatenFood)

    if (eatenFood <= initialFood) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`)
    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`)
    }

}
puppy(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])
console.log("______________________________")
puppy(["3",
    "1000",
    "1000",
    "1000",
    "Adopted"])
console.log("______________________________")
puppy(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"])
