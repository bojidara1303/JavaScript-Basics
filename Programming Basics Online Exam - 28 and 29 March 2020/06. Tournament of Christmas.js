function tournament(data) {
    let daysNum = Number(data[0]);
    let index = 1;
    let command = data[index];
    let wonGames = 0;
    let lostGames = 0;
    let wonMoney = 0;
    let totalWonMoney = 0;
    let daysWin = 0;
    let daysLost = 0;
    let win = 'win';
    let lose = 'lose';
    let finish = 'Finish';
 
    for (let i = 1; i <= daysNum; i++) {
 
        while (true) {
            if (command === win) {
                wonGames++;
                wonMoney += 20;
            } else if (command === lose) {
                lostGames++;
            }
 
            if (command === finish) {
                if (wonGames > lostGames) {
                    wonMoney += wonMoney * 0.10;
                    daysWin++;
                } else {
                    daysLost++;
                }
 
                totalWonMoney += wonMoney;
                wonGames = 0;
                lostGames = 0;
                wonMoney = 0;
                command = '';
                break;
            }
 
            index++;
            command = data[index];
        }
 
        if (i === daysNum) {
            if (daysWin > daysLost) {
                totalWonMoney += totalWonMoney * 0.20;
                console.log(`You won the tournament! Total raised money: ${totalWonMoney.toFixed(2)}`);
            } else {
                console.log(`You lost the tournament! Total raised money: ${totalWonMoney.toFixed(2)}`);
            }
        }
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
