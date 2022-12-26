function graduation(data) {
    let index = 0;
    let name = data[index];
    index++;
    let gradeCounter = 0;

    let i = 1;
    let gradesSum = 0;
    let isExcluded = false;

    while (i <= 12) {
        let grade = Number(data[index]);
        index++;

        if (grade < 4.00) {
            isExcluded = true;
            gradeCounter++;

            if (gradeCounter > 1) {
                console.log(`${name} has been excluded at ${i} grade`)
                break;
            }
            continue;
        }
        gradesSum += grade;
        i++;
    }
    if (!isExcluded) {
        let averageGrade = gradesSum / 12;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }
}
graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])
console.log("_______________")
graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])
