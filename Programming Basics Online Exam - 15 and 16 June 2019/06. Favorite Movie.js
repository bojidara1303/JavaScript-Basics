function favMovie(data) {
    let maxSum = 0;
    let currentSum = 0;
    let movieCount = 1;
    let index = 0;
    let command = data[index]
    let name;
    let maxNameLength = 0;
    let maxName;

    while (command) {
        currentSum = 0;
        if (command === "STOP") {
            break;
        }
        name = command = data[index];
        for (let i = 0; i < command.length; i++) {
            let length = command.length;
            let char = command.charCodeAt(i)
            if (char >= 65 && char <= 90) {
                char -= length;
                currentSum += char
            } else if (char >= 97 && char <= 122) {
                char -= 2 * length;
                currentSum += char;
            } else {
                currentSum += char;
            }
        }
        if (currentSum > maxSum) {
            maxSum = currentSum
            maxName = name
        }

        movieCount++;
        if (movieCount > 7) {
            console.log("The limit is reached.")
            break;
        }
        index++;
        command = data[index];
    }
    console.log(`The best movie for you is ${maxName} with ${maxSum} ASCII sum.`)
}
favMovie(["Matrix",
    "Breaking bad",
    "Legend",
    "STOP"])
console.log("_____________")
favMovie(["Wrong turn",
    "The maze",
    "Area 51",
    "Night Club",
    "Ice age",
    "Harry Potter",
    "Wizards"])
