function train(data) {
    let peopleCount = Number(data[0])
    let index = 1;
    let command = data[index]
    index++;
    let gradesCounter = 0;
    let avgGrade = 0;

    while (command !== "Finish") {
        gradesCounter++;
        let presentationName = command;
        let temporaryAvg = 0;
        for (let i = 1; i <= peopleCount; i++) {
            let temporaryGrade = Number(data[index]);
            index++;
            temporaryAvg += temporaryGrade;
        }
        temporaryAvg = temporaryAvg / peopleCount;
        let presentationRes = `${presentationName} - ${temporaryAvg.toFixed(2)}.`;
        console.log(presentationRes)
        avgGrade += temporaryAvg;
        command = data[index];
        index++;
    }
    avgGrade = avgGrade / gradesCounter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`)

}
train(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])
console.log("____________________")
train(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])
