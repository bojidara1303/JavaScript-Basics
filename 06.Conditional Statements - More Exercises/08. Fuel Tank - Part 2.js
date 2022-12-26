function fuelTank(data) {
    let fuelType = data[0];
    let fuelQuantity = Number(data[1]);
    let hasCard = data[2];

    let gasPerLiter = 0.93;
    let dieselPerLiter = 2.33;
    let petrolPerLiter = 2.22;

    let petrolDiscountPerLiter = 0.18;
    let dieselDiscountPerLiter = 0.12;
    let gasDiscountPerLiter = 0.08;
    let price = 0;

    switch (fuelType) {
        case 'Gas':
            price = fuelQuantity * gasPerLiter;
            switch (hasCard) {
                case 'Yes':
                    price = price - (fuelQuantity * gasDiscountPerLiter)
                    break;
                case 'No':
                    price = price
                    break;
            }
            break;

        case 'Gasoline':
            price = fuelQuantity * petrolPerLiter;
            switch (hasCard) {
                case 'Yes':
                    price = price - (fuelQuantity * petrolDiscountPerLiter)
                    break;
                case 'No':
                    price = price
                    break;
            }
            break;

        case 'Diesel':
            price = fuelQuantity * dieselPerLiter;
            switch (hasCard) {
                case 'Yes':
                    price = price - (fuelQuantity * dieselDiscountPerLiter)
                    break;
                case 'No':
                    price = price
                    break;
            }
            break;

    }
    if (fuelQuantity >= 20 && fuelQuantity <= 25) {
        price = price * 0.92;
    } else if (fuelQuantity > 25) {
        price = price * 0.9;
    }
    console.log(`${price.toFixed(2)} lv.`)
}
fuelTank(["Gas",
    "30",
    "Yes"]
)
fuelTank(["Gasoline",
    "25",
    "No"]
)
fuelTank(["Diesel",
    "19",
    "No"]
)