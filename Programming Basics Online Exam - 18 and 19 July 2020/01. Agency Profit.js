function agencyProfit(data) {
    let name = data[0];
    let adultTicketsCount = Number(data[1]);
    let kidTicketsCount = Number(data[2]);
    let adultTicketPrice = Number(data[3]);
    let sevicePrice = Number(data[4]);
    let kidTicketPrice = adultTicketPrice * 0.3;
    
    let adultPrice = (adultTicketPrice + sevicePrice) * adultTicketsCount;
    let totalKidPrice = kidTicketsCount * (kidTicketPrice + sevicePrice);
    let totalPrice = adultPrice + totalKidPrice;
    let finalProfit = totalPrice * 0.2;
    

    console.log(`The profit of your agency from ${name} tickets is ${finalProfit.toFixed(2)} lv.`)
}
agencyProfit(["WizzAir",
    "15",
    "5",
    "120",
    "40"])
console.log("___________________")
agencyProfit(["Ryanair",
    "60",
    "23",
    "158.96",
    "39.12"])
