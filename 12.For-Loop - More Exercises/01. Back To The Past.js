function backToThePast(data) {

    let inheritedMoney = Number(data[0]);
    let toYear = Number(data[1]);
    let initialAge = 18;

    for (let i = 1800; i <= toYear; i++) {
        let currentYear = i;
        if (currentYear % 2 === 0) {
            inheritedMoney -= 12000;
        } else {
            inheritedMoney -= 12000 + 50 * initialAge;
        }
        initialAge++;

    }
    if (inheritedMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${inheritedMoney.toFixed(2)} dollars left.`)
    } else if (inheritedMoney < 0) {
        let diff = Math.abs(inheritedMoney)
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`)
    }

}
backToThePast(["50000", "1802"])
console.log("______________")
backToThePast(["100000.15", "1808"])