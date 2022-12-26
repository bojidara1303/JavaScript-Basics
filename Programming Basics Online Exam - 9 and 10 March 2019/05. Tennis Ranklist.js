function tennis(data) {
    let tournamentsCount = Number(data[0]);
    let initialPoints = Number(data[1])
    let wonTournamentsCounter = 0;
    let wonPoints = 0;

    for (let i = 2; i < tournamentsCount + 2; i++) {
        let result = data[i]
        if (result === "W") {
            wonTournamentsCounter++;
            wonPoints += 2000;
        } else if (result === "SF") {
            wonPoints += 720;
        } else if (result === "F") {
            wonPoints += 1200;
        }
    }
    let finalPoints = initialPoints + wonPoints;
    let avgPointsWon = (wonTournamentsCounter / tournamentsCount) * 100;
    let avgpoints = wonPoints / tournamentsCount
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(avgpoints)}`)
    console.log(`${avgPointsWon.toFixed(2)}%`)
}
tennis(["5", "1400", "F", "SF", "W", "W", "SF"])
console.log("_____________________")
tennis(["4", "750", "SF", "W", "SF", "W"]);
console.log("_____________________")
tennis(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"])
