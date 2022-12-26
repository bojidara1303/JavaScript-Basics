function puppyCare(input) {
    let index = 0;
    let boughtFood = Number(input[index]) * 1000;
    index++;
    let eatenFood = 0;

    while (input[index] !== "Adopted") {
        let currentFood = Number(input[index]);
        eatenFood += currentFood;
        index++;
    }
    let diff = Math.abs(boughtFood - eatenFood)

    if (eatenFood <= boughtFood) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`)
    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`)
    }

}
puppyCare(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])
console.log("______________________________")
puppyCare(["3",
    "1000",
    "1000",
    "1000",
    "Adopted"])
console.log("______________________________")
puppyCare(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"])
