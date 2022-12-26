function tennis(data) {
    let tennisRacket = Number(data[0]);
    let tennisRacketCount = Number(data[1]);
    let pairShoesCount = Number(data[2]);
    let pairShoesPrice = (tennisRacket * 1) / 6;

    let totalRacketPrice = tennisRacket * tennisRacketCount;
    let totalShoesPrice = pairShoesCount * pairShoesPrice;
    let totalShoesAndRacketPrice = totalRacketPrice + totalShoesPrice;
    let equipment = totalShoesAndRacketPrice * 0.2;
    let totalMoney = totalShoesAndRacketPrice + equipment;
    let moneyForHim = (totalMoney * 1) / 8;
    let moneyForSponsors = (totalMoney * 7) / 8;

    console.log(`Price to be paid by Djokovic ${(Math.floor(moneyForHim))}`)
    console.log(`Price to be paid by sponsors ${(Math.ceil(moneyForSponsors))}`)


}
tennis(["850", "4", "2"])