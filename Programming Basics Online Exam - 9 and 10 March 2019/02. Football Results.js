function football(data) {
    let firstMatch = data[0];
    let secondMatch = data[1];
    let thirdMatch = data[2];
    let wonMatchesCounter = 0;
    let lostMatchesCounter = 0;
    let drawnMatchesCounter = 0;

    if (firstMatch[0] > firstMatch[2]) {
        wonMatchesCounter++;
    } else if (firstMatch[0] < firstMatch[2]) {
        lostMatchesCounter++;
    } else if (firstMatch[0] = firstMatch[2]) {
        drawnMatchesCounter++;
    }

    if (secondMatch[0] > secondMatch[2]) {
        wonMatchesCounter++;
    } else if (secondMatch[0] < secondMatch[2]) {
        lostMatchesCounter++;
    } else if (secondMatch[0] = secondMatch[2]) {
        drawnMatchesCounter++;
    }

    if (thirdMatch[0] > thirdMatch[2]) {
        wonMatchesCounter++;
    } else if (thirdMatch[0] < thirdMatch[2]) {
        lostMatchesCounter++;
    } else if (thirdMatch[0] = thirdMatch[2]) {
        drawnMatchesCounter++;
    }

    console.log(`Team won ${wonMatchesCounter} games.`);
    console.log(`Team lost ${lostMatchesCounter} games.`);
    console.log(`Drawn games: ${drawnMatchesCounter}`)


}
football(["3:1",
    "0:2",
    "0:0"])
console.log("_________________")
football(["4:2",
    "0:3",
    "1:0"])
console.log("_________________")
football(["0:2",
    "0:1",
    "3:3"])
