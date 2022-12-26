function fitnessCenter(data) {
    let people = Number(data[0]);

    let backCounter = 0;
    let chestCounter = 0;
    let legsCounter = 0;
    let absCounter = 0;
    let proteinShake = 0;
    let proteinBar = 0;

    for (let i = 1; i <= people; i++) {
        let type = data[i]
        if (type === "Back") {
            backCounter++;
        } else if (type === "Chest") {
            chestCounter++;
        } else if (type === "Legs") {
            legsCounter++;
        } else if (type === "Abs") {
            absCounter++;
        } else if (type === "Protein shake") {
            proteinShake++;
        } else if (type === "Protein bar") {
            proteinBar++;
        }
    }

    let workOutCount = backCounter + chestCounter + legsCounter + absCounter;
    let proteinCount = proteinShake + proteinBar;
    let workOuntPercent = (workOutCount / people) * 100;
    let proteinPercent = (proteinCount / people) * 100;

    console.log(`${backCounter} - back`);
    console.log(`${chestCounter} - chest`);
    console.log(`${legsCounter} - legs`);
    console.log(`${absCounter} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${workOuntPercent.toFixed(2)}% - work out`);
    console.log(`${proteinPercent.toFixed(2)}% - protein`);


}
fitnessCenter([
    "10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"])
console.log("______________________")
fitnessCenter([
    "7",
    "Chest",
    "Back",
    "Legs",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar"])
