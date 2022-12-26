function stars(data) {
    let budget = Number(data[0])
    let index = 1;
    let command = data[index];
    // index++;

    while (command) {
        if (command === "ACTION") {
            break;
        }
        command = data[index];
        index++;
        if (command.length > 15) {
            budget = budget * 0.8;
        } else if (command.length <= 15) {
            command = data[index];
            budget -= Number(command);
            index++;
        }

        // index++;
        command = data[index];
        
    }
    if (budget >= 0) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`)
    } else {
        let diff = Math.abs(budget)
        console.log(`We need ${diff.toFixed(2)} leva for our actors.`)
    }


}
stars(["90000",
    "Christian Bale",
    "70000.50",
    "Leonard DiCaprio",
    "Kevin Spacey",
    "24000.99"])
console.log("_________________")
stars(["170000",
    "Ben Affleck",
    "40000.50",
    "Zahari Baharov",
    "80000",
    "Tom Hanks",
    "2000.99",
    "ACTION"])
//90/100