function trekking(data) {
    let groups = Number(data[0]);
    let index = 1;
    let command = data[index];

    let groupCount = 0;

    let mousalaCounter = 0;
    let monblanCounter = 0;
    let kilimanjaroCounter = 0;
    let k2Counter = 0;
    let everestCounter = 0;
    let peopleCount = 0;


    while (groups > groupCount) {
        command = Number(data[index])

        if (command <= 5) {
            mousalaCounter += command;
            peopleCount += command;
        } else if (command >= 6 && command <= 12) {
            monblanCounter += command;
            peopleCount += command;
        } else if (command >= 13 && command <= 25) {
            kilimanjaroCounter += command;
            peopleCount += command;
        } else if (command >= 26 && command <= 40) {
            k2Counter += command;
            peopleCount += command;
        } else if (command >= 41) {
            everestCounter += command;
            peopleCount += command;
        }
        index++;
        command = data[index];
        groupCount++;

    }

    let mousalaPercent = (mousalaCounter / peopleCount) * 100;
    let monblanPercent = (monblanCounter / peopleCount) * 100;
    let kilimanjaroPercent = (kilimanjaroCounter / peopleCount) * 100;
    let k2Percent = (k2Counter / peopleCount) * 100;
    let everestPercent = (everestCounter / peopleCount) * 100;

    console.log(`${mousalaPercent.toFixed(2)}%`)
    console.log(`${monblanPercent.toFixed(2)}%`)
    console.log(`${kilimanjaroPercent.toFixed(2)}%`)
    console.log(`${k2Percent.toFixed(2)}%`)
    console.log(`${everestPercent.toFixed(2)}%`)

}
trekking(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
console.log("__________________________")
trekking(["5",
    "25",
    "41",
    "31",
    "250",
    "6"])
