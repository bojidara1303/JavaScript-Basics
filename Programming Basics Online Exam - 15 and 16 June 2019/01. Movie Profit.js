function movieProfit(data) {
    let name = data[0];
    let days = Number(data[1]);
    let ticketsCount = Number(data[2]);
    let pricePerTicket = Number(data[3]);
    let percent = Number(data[4]);
    let totalMoney = days * ticketsCount * pricePerTicket;
    let moneyLeft = totalMoney * percent / 100;
    let finalMoney = totalMoney - moneyLeft

    console.log(`The profit from the movie ${name} is ${finalMoney.toFixed(2)} lv.`)
}
movieProfit(["The Programmer",
    "20",
    "500",
    "7.50",
    "7"])
movieProfit(["Python Basics",
    "40",
    "34785",
    "10.45",
    "14"])
movieProfit(["The Jungle",
    "22",
    "20500",
    "9.37",
    "30"])
