function touristShop(data) {
    let budget = Number(data[0]);
    let index = 1;
    let command = data[index];
    index++;
    let price = 0;
    let productCount = 0;

    while (command) {
        if (command === "Stop") {
            break;
        }
        command = data[index];
        index++;
        productCount++;
        let productPrice = Number(command);

        if (productCount % 3 === 0) {
            price += productPrice * 0.5;
        } else {
            price += productPrice;
        }
        
        command = data[index];
        index++
    }
    if (budget >= price) {
        console.log(`You bought ${productCount} products for ${price.toFixed(2)} leva.`)
    } else {
        let diff = Math.abs(budget - price)
        console.log("You don't have enough money!");
        console.log(`You need ${diff.toFixed(2)} leva!`)
    }
}
touristShop(["153.20", "Backpack", "25.20", "Shoes", "54", "Sunglasses", "30", "Stop"]);
console.log("________________________")
touristShop(["54", "Thermal underwear", "24", "Sunscreen", "45"])


