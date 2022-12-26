function fruitShop(data) {
    let product = data[0];
    let day = data[1];
    let quantity = Number(data[2]);
    let price = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" ) {

        switch (product) {
            case "banana": price = quantity * 2.50; break;
            case "apple": price = quantity * 1.20; break;
            case "orange": price = quantity * 0.85; break;
            case "grapefruit": price = quantity * 1.45; break;
            case "kiwi": price = quantity * 2.70; break;
            case "pineapple": price = quantity * 5.50; break;
            case "grapes": price = quantity * 3.85; break;
        }
    } else if (day === "Saturday" || day === "Sunday") {
        switch (product) {
            case "banana": price = quantity * 2.70; break;
            case "apple": price = quantity * 1.25; break;
            case "orange": price = quantity * 0.90; break;
            case "grapefruit": price = quantity * 1.60; break;
            case "kiwi": price = quantity * 3.00; break;
            case "pineapple": price = quantity * 5.60; break;
            case "grapes": price = quantity * 4.20; break;
        }
    }

    if (price != 0) {
        console.log(price.toFixed(2))
    } else {
        console.log("error")
    }
}
fruitShop(["apple", "Tuesday", "2"])
fruitShop(["orange", "Sunday", "3"])
fruitShop(["kiwi", "Monday", "2.5"])
fruitShop(["grapes", "Saturday", "0.5"])
fruitShop(["tomato", "Monday", "0.5"])
