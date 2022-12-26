function easterCompetition(data) {

    let countBakers = Number(data[0]);
    let result = 0;
    let index = 1;
    let command = data[index]
    let maxResult = 0;
    let maxName;
    let bakersCount = 0;

    while (countBakers > bakersCount) {
        result = 0;
        let name = command = data[index];
        index++;

        while (command !=="Stop") {
            // if (command === "Stop") {
            //     break;
            // }
            let points = Number(data[index]);
            result += points;

            if (result > maxResult) {
                maxResult = result
                maxName = name;
            }
            index++;
            command = data[index]
            if (command === "Stop") {
                console.log(`${name} has ${result} points.`)
            }
        }

        if (command === "Stop" && result === maxResult) {
            console.log(`${maxName} is the new number 1!`)
        }
        index++;
        bakersCount++;
    
    }
    console.log(`${maxName} won competition with ${maxResult} points!`)

}
easterCompetition(["3",
    "Chef Manchev", "10",
    "10",
    "10",
    "10",
    "Stop",
    "Natalie",
    "8",
    "2",
    "9",
    "Stop",
    "George",
    "9",
    "2",
    "4",
    "2",
    "Stop"])
console.log("_________________")
easterCompetition(["2",
    "Chef Angelov",
    "9",
    "9",
    "9",
    "Stop",
    "Chef Rowe",
    "10",
    "10",
    "10",
    "10",
    "Stop"])
//70/100