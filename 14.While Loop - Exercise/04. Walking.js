function walking(data) {

    let index = 0;
    let command = data[index];
    index++;
    let goal = 10000;

    while (command !== "Going home") {
        let stepsCount = Number(command);
        goal -= stepsCount;

        if (goal <= 0) {
            console.log("Goal reached! Good job!");
            console.log(`${Math.abs(goal)} steps over the goal!`)
            break;
        }
        command = data[index];
        index++;
    }
    if (command === "Going home") {
        let stepsLeft = Number(data[index]);
        index++;
        goal -= stepsLeft;

        if (goal <= 0) {
            console.log(`Goal reached! Good job!`);
            console.log(`${Math.abs(goal)} steps over the goal!`);
        }
        else {
            console.log(`${goal} more steps to reach goal.`);
        }
    }
}
walking(["1000",
    "1500",
    "2000",
    "6500"])
console.log("___________________")
walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])
console.log("___________________")
walking(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"])
console.log("___________________")
walking(["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"])
