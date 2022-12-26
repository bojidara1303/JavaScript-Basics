function basketball(data) {
    let index = 0;
    let command = data[index];

    winCounter = 0;
    loseCounter = 0;
    let result = 0;
    let name;
    let gamesNumber = 0;
    let games = 0;

    while (command) {
        if (command === "End of tournaments") {
            break;
        }
        result = 0;
        name = command = data[index];
        index++;
        gamesNumber = command = Number(data[index]);
        index++;
        gameCounter = 1;
        while (gameCounter <= gamesNumber) {
            let pointsDesiTeam = command = Number(data[index]);
            index++;
            let pointsOtherTeam = command = Number(data[index]);
            if (pointsDesiTeam > pointsOtherTeam) {
                result = (pointsDesiTeam - pointsOtherTeam);
                winCounter++;
                games++;
                console.log(`Game ${gameCounter} of tournament ${name}: win with ${result} points.`)
            } else {
                result = Math.abs(pointsOtherTeam - pointsDesiTeam);
                loseCounter++;
                games++;
                console.log(`Game ${gameCounter} of tournament ${name}: lost with ${result} points.`)
            }
            index++;
            gameCounter++;

        }
        command = data[index]
    }

    let winPercent = (winCounter / games) * 100;
    let losePercent = (loseCounter / games) * 100;
    console.log(`${winPercent.toFixed(2)}% matches win`)
    console.log(`${losePercent.toFixed(2)}% matches lost`)
}
basketball(["Dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments"])
console.log("____________________")
basketball(["Ballers",
    "3",
    "87",
    "63",
    "56",
    "65",
    "75",
    "64",
    "Sharks",
    "4",
    "64",
    "76",
    "65",
    "86",
    "68",
    "99",
    "45",
    "78",
    "End of tournaments"])
