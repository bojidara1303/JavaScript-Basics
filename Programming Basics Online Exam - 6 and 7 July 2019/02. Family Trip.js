function familyTrip(data) {
    let budget = Number(data[0]);
    let nightsCount = Number(data[1]);
    let pricePerNight = Number(data[2]);
    let percentAdditExpenses = Number(data[3]) / 100;
    let totalMoneyPerNights = nightsCount * pricePerNight;

    if (nightsCount > 7) {
        totalMoneyPerNights = totalMoneyPerNights * 0.95;
    }

    let moneyForAdditExpences = budget * percentAdditExpenses;
    let finalMoney = totalMoneyPerNights + moneyForAdditExpences;

    
    if(budget >= finalMoney){
        let moneyLeft = budget - finalMoney;
        console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`)
    } else if(budget < finalMoney){
        let diff = Math.abs(finalMoney - budget)
        console.log(`${diff.toFixed(2)} leva needed.`)
    }



}
familyTrip(["800.50",
    "8",
    "100",
    "2"])
familyTrip(["500",
    "7",
    "66",
    "15"])
