function addbags(data) {
    let twentyKgPrice = Number(data[0]);
    let kilogramsBaggage = Number(data[1]);
    let days = Number(data[2]);
    let countBaggage = Number(data[3]);
    let price = 0;

    if (kilogramsBaggage < 10) {
        price = twentyKgPrice * 0.2;
    } else if (kilogramsBaggage >= 10 && kilogramsBaggage <= 20) {
        price = twentyKgPrice * 0.5
    } else if (kilogramsBaggage > 20) {
        price = twentyKgPrice;
    }

    if (days > 30) {
        price = price + (price * 0.1);
    } else if (days >= 7 && days <= 30) {
        price = price + (price * 0.15);
    } else if (days < 7) {
        price = price + (price * 0.4);
    }
    let totalPrice = price * countBaggage;
    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`)
}
addbags(["30",
    "18",
    "15",
    "2"])
addbags(["25.50",
    "5",
    "36",
    "6"])
addbags(["63.80",
    "23",
    "3",
    "1"])
