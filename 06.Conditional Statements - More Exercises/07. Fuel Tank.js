function fuelTank(data) {

    let fuelType = data[0];
    let litersInTank = Number(data[1]);

    if ((fuelType === 'Diesel' || fuelType === 'Gasoline' || fuelType === 'Gas') && litersInTank < 25) {
        console.log(`Fill your tank with ${fuelType.toLowerCase()}!`)
    } else if ((fuelType === 'Diesel' || fuelType === 'Gasoline' || fuelType === 'Gas') && litersInTank >= 25) {
        console.log(`You have enough ${fuelType.toLowerCase()}.`)
    } else {
        console.log("Invalid fuel!")
    }

}
fuelTank(["Diesel", "10"]);
fuelTank(["Gasoline", "40"]);
fuelTank(["Gas", "25"]);
fuelTank(["Kerosene", "200"]);