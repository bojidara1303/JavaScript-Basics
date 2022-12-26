function excursion(data) {
    let nightPrice = 20;
    let transportCard = 1.60;
    let museumTicket = 6;

    let people = Number(data[0])
    let nightsCount = Number(data[1]);
    let transportCardsCount = Number(data[2])
    let ticketsCount = Number(data[3])

    let totalNightPrice = nightPrice * nightsCount;
    let totalCardsPrice = transportCardsCount * transportCard;
    let totalTicketsPrice = ticketsCount * museumTicket;
    let totalPricePerPerson = totalNightPrice + totalCardsPrice + totalTicketsPrice;
    let totalMoney = totalPricePerPerson * people;
    let additTax = totalMoney * 0.25;
    let final = totalMoney + additTax;
    console.log(final.toFixed(2))

}
excursion(["20",
    "14",
    "30",
    "6"])
excursion(["131",
    "9",
    "33",
    "46"])
