function tennisRanklist(data) {

    let countOfTournaments = Number(data[0]);
    let initialPoints = Number(data[1]);
    let totalPoints = 0;
    let wCounter = 0;
    let fCounter = 0;
    let sfCounter = 0;

    for (let i = 2; i <= data.length; i++) {
        let type = data[i];
        if (type === "W") {
            totalPoints += 2000;
            wCounter++;
        } else if (type === "F") {
            totalPoints += 1200;
            fCounter++;
        } else if (type === "SF") {
            totalPoints += 720;
            sfCounter++;
        }
    }
    let finalPoints = totalPoints + initialPoints;
    let avgPoints = totalPoints / countOfTournaments;
    let wonTournamentsPercent = wCounter / countOfTournaments * 100;
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${wonTournamentsPercent.toFixed(2)}%`)

}
tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
console.log("_______________");
tennisRanklist(["4",
    "750",
    "SF",
    "W",
    "SF",
    "W"])
console.log("_______________")
tennisRanklist(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"])

