function darts(data) {

    let initialPoints = 301;
    let name = data[0];
    let index = 1;
    let command = data[index];
    let successfulShotsCounter = 0;
    let unsuccesfullCounter = 0;

    while (command) {
        if (command === "Retire") {
            break;
        }

        command = data[index];
        index++;
        let points = Number(data[index])
        if (command === "Single") {
            initialPoints -= points;
            successfulShotsCounter++;
        } else if (command === "Double") {
            initialPoints -= points * 2;
            successfulShotsCounter++;
        } else if (command === "Triple") {
            initialPoints -= points * 3;
            successfulShotsCounter++;
        }
        index++;
        command = data[index];


    }

    if (initialPoints <= 0) {
        console.log(`${name} won the leg with ${successfulShotsCounter} shots.`)
    } else {
        console.log(`${name} retired after ${unsuccesfullCounter} unsuccessful shots.`)
    }

}
darts(["Michael van Gerwen",
    "Triple",
    "20",
    "Triple",
    "19",
    "Double",
    "10",
    "Single",
    "3",
    "Single",
    "1",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20"])
console.log("______________________")
darts(["Stephen Bunting",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "7",
    "Single",
    "12",
    "Double",
    "1",
    "Single",
    "1"])
console.log("______________________")
darts(["Rob Cross",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20",
    "Triple",
    "20",
    "Double",
    "5",
    "Triple",
    "10",
    "Double",
    "6",
    "Retire"])
//50/100