function renovation(data) {
    let wallHeight = Number(data[0]);
    let wallWidth = Number(data[1]);
    let percentage = Number(data[2]);
    let total = wallHeight * wallWidth * 4;
    let forPainting = total - (total * percentage) / 100;

    let painted = 0;
    let index = 3;
    let command = data[index];


    while (command) {
        if (command === "Tired!") {
            break;
        }
        command = Number(data[index]);
        painted += command;
        index++;
        command = data[index]

    }

    let diff = Math.abs(forPainting - painted)

    if (forPainting > painted) {
        console.log(`${diff} quadratic m left.`);
    } else if (forPainting < painted) {
        console.log(`All walls are painted and you have ${diff} l paint left!`)
    } else if (forPainting = painted) {
        console.log("All walls are painted! Great job, Pesho!")
    }
}

renovation(["3", "5", "10", "2", "3", "4", "Tired!"])
console.log("______________________")
renovation(["2", "3", "25", "6", "7", "8"])
