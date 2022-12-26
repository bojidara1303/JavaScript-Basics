function account(data) {
    let index = 0;
    let sum = 0;
    let command = data[index];
    index++;

    while (command !== "NoMoreMoney") {
        let money = Number(command)
        if (command < 0) {
            console.log("Invalid operation!");
            break;
        }
        sum += money;
        console.log("Increase: " + money.toFixed(2));
        command = data[index]
        index++;

    }

    console.log(`Total: ${sum.toFixed(2)}`)

}
account(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])
console.log("__________________")
account(["120",
    "45.55",
    "-150"])
