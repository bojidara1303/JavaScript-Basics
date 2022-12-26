function exam(data) {
    let studentsCount = Number(data[0]);

    let excellentCounter = 0;
    let veryGoodCounter = 0;
    let goodCounter = 0;
    let failCounter = 0;

    let total = 0;

    for (let i = 1; i <= studentsCount; i++) {
        let grade = Number(data[i]);

        if (grade >= 5.00 && grade <= 6.00) {
            excellentCounter++;
            total += grade;
        } else if (grade >= 4.00 && grade <= 4.99) {
            veryGoodCounter++;
            total += grade;
        } else if (grade >= 3.00 && grade <= 3.99) {
            goodCounter++;
            total += grade;
        } else if (grade >= 2.00 && grade <= 2.99) {
            failCounter++;
            total += grade;
        } 
    }
    let avgGrade = total / studentsCount;
    let excellentPercent = excellentCounter / studentsCount * 100;
    let veryGoodPercent = veryGoodCounter / studentsCount * 100;
    let goodPercent = goodCounter / studentsCount * 100;
    let failPercent = failCounter / studentsCount * 100;

    console.log(`Top students: ${excellentPercent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${veryGoodPercent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${goodPercent.toFixed(2)}%`);
    console.log(`Fail: ${failPercent.toFixed(2)}%`);
    console.log(`Average: ${avgGrade.toFixed(2)}`)
}

exam(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])
console.log("__________________")
exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])
