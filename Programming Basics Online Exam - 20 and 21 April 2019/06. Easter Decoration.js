function easterDecoration(data) {

    let basketPrice = 1.50;
    let wreathPrice = 3.80;
    let chocoBunnyPrice = 7;

    let customers = Number(data[0]);
    let index = 1;
    let command = data[index];

    let totalPrice = 0;
    let currentCustomers = 1;
    let itemsCount = 0;
    let price = 0;


    while (currentCustomers <= customers) {
        command = data[index];
        while (command) {
            command = data[index];
            switch (command) {
                case 'basket':
                    price += basketPrice;
                    itemsCount++;
                    break;

                case 'wreath':
                    price += wreathPrice;
                    itemsCount++;
                    break;

                case 'chocolate bunny':
                    price += chocoBunnyPrice;
                    itemsCount++;
                    break;
            }

            if (command === "Finish") {
                if (itemsCount % 2 === 0) {
                    price = price * 0.80;
                }
                totalPrice += price;
                console.log(`You purchased ${itemsCount} items for ${price.toFixed(2)} leva.`)
                itemsCount = 0;
                price = 0;
            }

            currentCustomers++;
            index++;
            command = data[index]

        }
    }

    let avgBill = totalPrice / customers;
    console.log(`Average bill per client is: ${avgBill.toFixed(2)} leva.`)

}
easterDecoration(["2",
    "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish"])
console.log("_________________")
easterDecoration(["1",
    "basket",
    "wreath",
    "chocolate bunny",
    "wreath",
    "basket",
    "chocolate bunny",
    "Finish"])
