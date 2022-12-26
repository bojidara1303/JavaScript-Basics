function clever(data) {

    let age = Number(data[0]);
    let washingMachinePrice = Number(data[1]);
    let toyPrice = Number(data[2]);

    let money = 0;
    let temporary = 10;
    let toyCounter = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += temporary;
            temporary += 10;
            money -= 1;
        } else {
            toyCounter++;
        }
    }

    money += toyCounter * toyPrice;

    let diff = Math.abs(money - washingMachinePrice)

    if (money >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)} `)
    } else {
        console.log(`No! ${diff.toFixed(2)}`)
    }

}
clever(["10", "170.00", "6"]);
console.log("______________")
clever(["21", "1570.98", "3"])

