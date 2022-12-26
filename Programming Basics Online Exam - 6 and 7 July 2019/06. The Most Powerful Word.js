function word(data) {
    let index = 0;
    let command = data[index];
    let result = 0;
    let maxResult = 0;
    let maxName;
    let initChar;

    while (command) {
        if (command === "End of words") {
            break;
        }
        result = 0;
        command = data[index];
        for (let i = 0; i < command.length; i++) {
            let char = Number(command.charCodeAt(i))
            initChar = command.charCodeAt(0)
            result += char;
        }

        if (initChar === 65 || initChar === 69 || initChar === 73 || initChar === 79 || initChar === 85 || initChar === 89 || initChar === 97 || initChar === 101 ||
            initChar === 105 || initChar === 111 || initChar === 117 || initChar === 121) {
            result = result * command.length
        } else {
            result = Math.floor(result / command.length);
        }

        if (result > maxResult) {
            maxResult = result;
            maxName = command;
        }



        index++;
        command = data[index]
    }
    console.log(`The most powerful word is ${maxName} - ${maxResult}`)

}
word(["The",
    "Most",
    "Powerful",
    "Word",
    "Is",
    "Experience",
    "End of words"])
console.log("____________________")
word(["But",
    "Some",
    "People",
    "Say",
    "It's",
    "LOVE",
    "End of words"])
