function excursion(data) {
    let peopleCount = Number(data[0]);
    let nightsCount = Number(data[1]);
    let transportCardsCount = Number(data[2]);
    let museumTicketsCount = Number(data[3]);

    let nightPrice = 20;
    let transportCardPrice = 1.60;
    let museumTicketPrice = 6;

    let totalNightPrice = nightPrice * nightsCount;
    // console.log(totalNightPrice)
    let totalTranspCardPrice = transportCardPrice * transportCardsCount;
    // console.log(totalTranspCardPrice)
    let totalMuseumTicketsPrice = museumTicketPrice * museumTicketsCount;
    // console.log(totalMuseumTicketsPrice)
    let total = (totalNightPrice + totalTranspCardPrice + totalMuseumTicketsPrice)*peopleCount;
    let final = total + (total * 0.25);
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
