function tournament(data) {
    let index = 0;
    let days = Number(data[index])
    index++;
    let command = data[index];
    // index++;

    let winCounter = 0;
    let loseCounter = 0;
    let moneyWon = 0;
    let currentWon = 0;
    let currentLose = 0;

    while (days > 0) {
        command = data[index]
        while (command) {
            if (command === "Finish") {
                break;
            }
            let sport = command = data[index];
            index++;
            currentLose = 0;
            currentWon = 0;
            let winOrLose = data[index];
            index++;
            if (winOrLose === 'win') {
                currentWon++;
                winCounter++;
            } else if (winOrLose === 'lose') {
                currentLose++;
                loseCounter++;
            }
            // index++;
        }


        moneyWon = winCounter * 20;
        if (currentWon > currentLose) {
            moneyWon = moneyWon + (moneyWon * 0.1)
        }
        days--;
        command = data[index];
        index++;
    }

    if (winCounter > loseCounter) {
        moneyWon = moneyWon + (moneyWon * 0.2);
        console.log(`You won the tournament! Total raised money: ${moneyWon.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${moneyWon.toFixed(2)}`)
    }


}
tournament(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"])
console.log("______________________________")
tournament(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"])
