function game(data) {
    let firstPlayerName = data[0];
    let secondPlayerName = data[1];
    let index = 2;
    let command = data[index];
    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;
    let isNumberWars = false;

    while (command) {
        if (command === "End of game") {
            break;
        }
        let firstPlayerCard = Number(data[index]);
        index++;
        let secondPlayerCard = Number(data[index]);
        if (firstPlayerCard > secondPlayerCard) {
            firstPlayerPoints += (firstPlayerCard - secondPlayerCard)
        } else if (secondPlayerCard > firstPlayerCard) {
            secondPlayerPoints += (secondPlayerCard - firstPlayerCard)
        } else if (firstPlayerCard = secondPlayerCard) {
            isNumberWars = true;
            break;
        }
        index++;
        command = data[index];

    }

    if (isNumberWars) {
        console.log("Number wars!");
        if (firstPlayerPoints > secondPlayerPoints) {
            console.log(`${firstPlayerName} is winner with ${firstPlayerPoints} points`)
        } else if (secondPlayerPoints > firstPlayerPoints) {
            console.log(`${secondPlayerName} is winner with ${secondPlayerPoints} points`)
        }
    } else {
        console.log(`${firstPlayerName} has ${firstPlayerPoints} points`);
        console.log(`${secondPlayerName} has ${secondPlayerPoints} points`);
    }

}
game(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"])
console.log("____________________________")
game(["Elena", "Simeon", "6", "3", "2", "5", "8", "9", "End of game"]);
console.log("____________________________")
game(["Aleks", "Georgi", "4", "5", "3", "2", "4", "3", "4", "4", "5", "2"])
//66/100