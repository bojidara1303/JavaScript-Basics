function excursion(data) {
    let seaExcursionCount = Number(data[0]);
    let mountainExcursionCount = Number(data[1]);
    let result = 0;


    for (let i = 2; i < data.length; i++) {
        if (data[i] === 'sea') {
            if (seaExcursionCount > 0) {
                seaExcursionCount--;
                result += 680;
            }
        } else if (data[i] === 'mountain') {
            if (mountainExcursionCount > 0) {
                mountainExcursionCount--;
                result += 499;
            }
        }
    }
    if (seaExcursionCount === 0 && mountainExcursionCount === 0) {
        console.log("Good job! Everything is sold.")
    }


    console.log(`Profit: ${result} leva.`)

}
excursion(["2",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"])
console.log("___________________")
excursion(["6",
    "3",
    "sea",
    "mountain",
    "mountain",
    "mountain",
    "sea",
    "Stop"])
