function trekking(data) {

    let groupsCount = Number(data[0]);
    let mousala = 0;
    let monblan = 0;
    let kilimandgaro = 0;
    let k2 = 0;
    let everest = 0;


    for (let i = 1; i <= groupsCount; i++) {
        let num = Number(data[i]);

        if (num <= 5) {
            mousala += num;
        } else if (num >= 6 && num <= 12) {
            monblan += num;
        } else if (num >= 13 && num <= 25) {
            kilimandgaro += num;
        } else if (num >= 26 && num <= 40) {
            k2 += num;
        } else if (num >= 41) {
            everest += num;
        }

    }

    let totalCountOfPeople = mousala + monblan + kilimandgaro + k2 + everest;
    let mousalaPercent = mousala / totalCountOfPeople * 100;
    let monblanPercent = monblan / totalCountOfPeople * 100;
    let kilimandgaroPercent = kilimandgaro / totalCountOfPeople * 100;
    let k2Percent = k2 / totalCountOfPeople * 100;
    let everestPercent = everest / totalCountOfPeople * 100;

    console.log(`${mousalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kilimandgaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);

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
console.log("_______________________")
trekking(["5",
    "25",
    "41",
    "31",
    "250",
    "6"])
