function vacation(data) {
    let moneyNeeded = Number(data[0]);
    let moneyWeHave = Number(data[1]);
    let index = 2;
    let daysSpend = 0;
    let dayCounter = 0;

    while (moneyWeHave < moneyNeeded) {
        let command = data[index];
        index++;
        let currentMoney = Number(data[index]);
        dayCounter++;

        switch (command) {
            case 'spend':
                moneyWeHave -= currentMoney;
                if (moneyWeHave < 0) {
                    moneyWeHave = 0;
                }
                daysSpend++;
                break;

            case 'save':
                moneyWeHave += currentMoney;
                daysSpend = 0;
                break;
        }
        if (daysSpend >= 5) {
            console.log("You can't save the money.");
            console.log(`${dayCounter}`);
            break;
        }
        index++;
    }
    if (moneyWeHave >= moneyNeeded) {
        console.log(`You saved the money for ${dayCounter} days.`)
    }

}
vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])
vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])
vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"])
