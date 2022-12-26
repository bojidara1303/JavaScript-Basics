function cinemaVoucher(data) {
    let voucherMoney = Number(data[0]);
    let index = 1;
    let command = data[index];
    let ticketsCount = 0;
    let otherCount = 0;
    let price = 0;
    let firstChar = 0;
    let secChar = 0;

    while (command) {
        if (command === "End") {
            break;
        }
        command = data[index];
        index++;
        if (command.length > 8) {
            firstChar = command.charCodeAt([0]);
            secChar = command.charCodeAt([1]);
            price = firstChar + secChar;
            if (voucherMoney >= price) {
                voucherMoney -= price;
                ticketsCount++;
            }
        } else if (command.length <= 8) {
            firstChar = command.charCodeAt([0]);
            price = firstChar;
            if (voucherMoney >= price) {
                voucherMoney -= price;
                otherCount++;
            }
        }
        command = data[index];

    }
    console.log(`${ticketsCount}`);
    console.log(`${otherCount}`)

}
cinemaVoucher(["300",
    "Captain Marvel",
    "popcorn",
    "Pepsi"])
console.log("___________________________")
cinemaVoucher(["1500",
    "Avengers: Endgame",
    "Bohemian Rhapsody",
    "Deadpool 2",
    "End"])

//80/100