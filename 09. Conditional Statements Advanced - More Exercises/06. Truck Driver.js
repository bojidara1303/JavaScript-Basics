function driver(data) {

    let season = data[0];
    let kmPerMonth = Number(data[1]);
    let monthsInSeason = 4;
    let pricePerKm = 0;


    if (kmPerMonth <= 5000) {
        if (season === "Spring" || season === "Autumn") {
            pricePerKm = 0.75;
        } else if (season === "Summer") {
            pricePerKm = 0.90;
        } else if (season === "Winter") {
            pricePerKm = 1.05;
        }
    } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
        if (season === "Spring" || season === "Autumn") {
            pricePerKm = 0.95;
        } else if (season === "Summer") {
            pricePerKm = 1.10;
        } else if (season === "Winter") {
            pricePerKm = 1.25;
        }
    } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
        pricePerKm = 1.45;
    }
    let totalMoneyPerSeason = kmPerMonth * pricePerKm * monthsInSeason;
    let finalMoney = totalMoneyPerSeason * 0.9;

    console.log(`${finalMoney.toFixed(2)}`)
}
driver(["Summer", "3455"]);
driver(["Winter", "4350"]);
driver(["Spring", "1600"]);
driver(["Winter", "5678"]);
driver(["Autumn", "8600"]);
driver(["Winter", "16042"]);
driver(["Spring", "16942"]);