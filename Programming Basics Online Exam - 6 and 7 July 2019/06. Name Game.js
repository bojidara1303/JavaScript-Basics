function nameGame(data) {
    let index = 0;
    let command = data[index];
    let name;
    let maxResult = 0;
    let maxName;

    let result = 0;

    while (command) {
        if (command === "Stop") {
            break;
        }
        result = 0;
        name = command = data[index]
        index++;

        for (let i = 0; i < name.length; i++) {
            let num = Number(name.charCodeAt(i));
            command = Number(data[index])

            if (num === command) {
                result += 10;
            } else {
                result += 2;
            }
            index++;
        }
        if (result >= maxResult) {
            maxResult = result;
            maxName = name;
        }

        command = data[index]
    }

    console.log(`The winner is ${maxName} with ${maxResult} points!`)

}
nameGame(["Ivan",
    "73",
    "20",
    "98",
    "110",
    "Ivo",
    "80",
    "65",
    "87",
    "Stop"])
console.log("_________________")
nameGame(["Pesho",
    "124",
    "34",
    "111",
    "97",
    "99",
    "Gosho",
    "98",
    "124",
    "88",
    "76",
    "18",
    "Stop"])
//90/100