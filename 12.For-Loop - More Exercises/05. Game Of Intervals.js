function intervals(data) {
    let moves = Number(data[0]);

    let zeroToNineC = 0;
    let tenToNineteenC = 0;
    let twentyToTwentyNineC = 0;
    let thirtyToThirtyNineC = 0;
    let fourtyToFifityC = 0;
    let invalidCounter = 0;
    let points = 0;

    for (let i = 1; i <= moves; i++) {
        let num = Number(data[i]);

        if (num >= 0 && num <= 9) {
            zeroToNineC++;
            points += num * 0.2;
        } else if (num >= 10 && num <= 19) {
            tenToNineteenC++;
            points += num * 0.3;
        } else if (num >= 20 && num <= 29) {
            twentyToTwentyNineC++;
            points += num * 0.4;
        } else if (num >= 30 && num <= 39) {
            thirtyToThirtyNineC++;
            points += 50;
        } else if (num >= 40 && num <= 50) {
            fourtyToFifityC++;
            points += 100;
        } else {
            invalidCounter++;
            points = points / 2;
        }
    }
    let zeroToNinePercent = zeroToNineC / moves * 100;
    let tenToNineteenPercent = tenToNineteenC / moves * 100;
    let twentyToTwentyNinePercent = twentyToTwentyNineC / moves * 100;
    let thirtyToThirtyNinePercent = thirtyToThirtyNineC / moves * 100;
    let fourtyToFifityPercent = fourtyToFifityC / moves * 100;
    let invalidPercent = invalidCounter / moves * 100;

    console.log(`${points.toFixed(2)}`);
    console.log(`From 0 to 9: ${zeroToNinePercent.toFixed(2)}%`);
    console.log(`From 10 to 19: ${tenToNineteenPercent.toFixed(2)}%`);
    console.log(`From 20 to 29: ${twentyToTwentyNinePercent.toFixed(2)}%`);
    console.log(`From 30 to 39: ${thirtyToThirtyNinePercent.toFixed(2)}%`);
    console.log(`From 40 to 50: ${fourtyToFifityPercent.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidPercent.toFixed(2)}%`)

}
intervals(["10",
    "43",
    "57",
    "-12",
    "23",
    "12",
    "0",
    "50",
    "40",
    "30",
    "20"
])