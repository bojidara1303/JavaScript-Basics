function school(data) {

    let packsOfPens = Number(data[0]);
    let packsOfHighlighters = Number(data[1]);
    let litersLiquid = Number(data[2]);
    let percentDiscount = Number(data[3]) / 100;

    let packPensPrice = 5.80;
    let packHighlighterPrice = 7.20;
    let liquidPricePerLiter = 1.20;

    let totalPenPrice = packsOfPens * packPensPrice;
    let totalHighlighterPrice = packsOfHighlighters * packHighlighterPrice;
    let totalLiquidPrice = litersLiquid * liquidPricePerLiter;

    let price = totalPenPrice + totalHighlighterPrice + totalLiquidPrice;
     price -= (price * percentDiscount)
    console.log(price)


}
school(["2 ", "3 ", "4 ", "25 "])