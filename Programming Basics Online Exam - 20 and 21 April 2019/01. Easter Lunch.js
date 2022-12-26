function easterLunch(data) {
    let breadCount = Number(data[0]);
    let eggsCount = Number(data[1]);
    let cookiesKg = Number(data[2]);
    let breadPrice = 3.20;
    let eggsPricePer12 = 4.35;
    let cookiesPricePerKg = 5.40;
    let eggPaint = 0.15;

    let totalPricePerEggs = eggsCount * eggsPricePer12;
    let totalBreadPrice = breadCount * breadPrice;
    let totalCookiesPrice = cookiesKg * cookiesPricePerKg;
    let totalPaint = eggPaint * eggsCount * 12;
    let totalMoney = totalPricePerEggs + totalBreadPrice + totalCookiesPrice + totalPaint;
    console.log(totalMoney.toFixed(2))


}
easterLunch(["3",
    "2",
    "3"])
easterLunch(["4",
    "4",
    "3"])
easterLunch(["2",
    "3",
    "2"])
