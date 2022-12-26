function bestPlayer(data) {
    let index = 0;
    let command = data[index];
    let maxScore = 0;
    let playerName;
    let maxName;

    while (command) {
        if (command === "END") {
            break;
        }
        playerName = command = data[index];
        index++;
        let currentGoals = Number(data[index])
        if (currentGoals > maxScore) {
            maxScore = currentGoals;
            maxName = playerName;
        }

        index++;
        command = data[index];
    }

    console.log(`${maxName} is the best player!`)
    if (maxScore >= 3) {
        console.log(`He has scored ${maxScore} goals and made a hat-trick !!!`)
    } else {
        console.log(`He has scored ${maxScore} goals.`)
    }
}
bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
console.log("___________________")
bestPlayer(["Silva", "5", "Harry Kane", "10"])
console.log("____________________")
bestPlayer(["Petrov", "2", "Drogba", "11"])
console.log("___________________")
bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
console.log("___________________")
bestPlayer(["Zidane", "1", "Felipe", "2", "Johnson", "4", "END"])

//while