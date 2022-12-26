function football(data) {
    let name = data[0];
    let gamesCount = Number(data[1]);
    let index = 2;
    let command = data[index];

    let wCounter = 0;
    let dCounter = 0;
    let lCounter = 0;
    let gameCouner = 0;

    while (gameCouner < gamesCount) {

        command = data[index]
        switch (command) {
            case 'W':
                wCounter++;
                break;
            case 'D':
                dCounter++;
                break;
            case 'L':
                lCounter++;
                break;

        }

        gameCouner++;
        index++;
        command = data[index]

    }
    let totalPoints = (wCounter * 3) + (dCounter * 1);
    let wonGamesPercent = (wCounter / gamesCount) * 100;



    if (totalPoints <= 0) {
        console.log(`${name} hasn't played any games during this season.`)
    } else {
        console.log(`${name} has won ${totalPoints} points during this season.`)
        console.log("Total stats:");
        console.log(`## W: ${wCounter}`);
        console.log(`## D: ${dCounter}`);
        console.log(`## L: ${lCounter}`);
        console.log(`Win rate: ${wonGamesPercent.toFixed(2)}%`)
    }

}

football(["Liverpool",
    "10",
    "W",
    "D",
    "D",
    "W",
    "L",
    "W",
    "D",
    "D",
    "W",
    "W"])
console.log("____________________")
football(["Barcelona",
    "7",
    "W",
    "D",
    "L",
    "L",
    "W",
    "W",
    "D"])
console.log("____________________")
football(["Chelsea",
    "0"])

        //90/100