function vetParking(data) {
    let daysCount = Number(data[0])
    let index = 1;
    let currentHour = data[index];
    let totalPrice = 0;
    let currentDay = 1;

    while (currentDay <= daysCount) {
        currentHour = Number(data[index]);
        let pricePerDay = 0;
        if (currentDay % 2 === 0) {
            for (let i = 1; i <= currentHour; i++) {
                let hour = Number(i)
                if (hour % 2 === 0) {
                    totalPrice += 1;
                    pricePerDay += 1;
                } else {
                    totalPrice += 2.50;
                    pricePerDay += 2.50;
                }
            }
        } else {
            for (let i = 1; i <= currentHour; i++) {
                let hour = Number(i)
                if (hour % 2 === 0) {
                    totalPrice += 1.25;
                    pricePerDay += 1.25;
                } else {
                    totalPrice += 1;
                    pricePerDay += 1;
                }
            }
        }
        console.log(`Day: ${currentDay} - ${pricePerDay.toFixed(2)} leva`)
        currentDay++;
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`)

}
vetParking(["2",
    "5"])
console.log("_______________")
vetParking(["5",
    "2"])
