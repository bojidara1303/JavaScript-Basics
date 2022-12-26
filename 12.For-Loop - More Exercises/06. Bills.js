function bills(data) {
    let months = Number(data[0]);

    let waterPerMonth = 20;
    let internetPerMonth = 15;
    let totalOther = 0;
    let totalElectricity = 0;

    for (let i = 1; i <= months; i++) {
        let electricity = Number(data[i]);
        totalElectricity += electricity;
        let otherBillsPerMonth = (electricity + waterPerMonth + internetPerMonth) + ((electricity + waterPerMonth + internetPerMonth) * 0.2);
        totalOther += otherBillsPerMonth;
    }
    let totalWater = months * waterPerMonth;
    let totalInternet = months * internetPerMonth;
    let avgPerMonth = (totalWater + totalInternet + totalElectricity + totalOther) / months;

    console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`)
    console.log(`Water: ${totalWater.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
    console.log(`Other: ${totalOther.toFixed(2)} lv`);
    console.log(`Average: ${avgPerMonth.toFixed(2)} lv`)

}
bills(["5",
    "68.63",
    "89.25",
    "132.53",
    "93.53",
    "63.22"
])
console.log("_________________")
bills(["8",
    "123.54",
    "231.54",
    "140.23",
    "100",
    "122.4",
    "430",
    "178.52",
    "64.2"
])