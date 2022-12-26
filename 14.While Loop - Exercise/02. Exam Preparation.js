function examPrep(data) {
    let poorGradesCount = Number(data[0]);

    let index = 1;
    let problem = data[index];
    let countOfProblems = 0;
    let sumOfGrades = 0;
    let numOfBadGrades = 0;
    let lastProblemName = "";

    while (problem !== "Enough") {
        lastProblemName = problem = data[index];
        countOfProblems++;
        index++;

        let currentGrade = Number(data[index]);
        sumOfGrades += currentGrade;

        if (currentGrade <= 4) {
            numOfBadGrades++;
        }
        if (numOfBadGrades >= poorGradesCount) {
            console.log(`You need a break, ${numOfBadGrades} poor grades.`);
            break;
        }
        index++;
        problem = data[index]
    }

    if (problem === "Enough") {
        let averageGrade = (sumOfGrades / countOfProblems).toFixed(2);
        console.log(`Average score: ${averageGrade}`);
        console.log(`Number of problems: ${countOfProblems}`);
        index -= 2
        let problem = data[index];
        console.log(`Last problem: ${lastProblemName}`)
    }

}
examPrep(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
console.log("_____________________")
examPrep(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])
