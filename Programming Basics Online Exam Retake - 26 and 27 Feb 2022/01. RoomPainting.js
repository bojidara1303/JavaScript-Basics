function repainting(paintBoxes, paperRolls, glovesPrice, brushPrice) {
    let paintBoxPrice = 21.50;
    let paperRollPrice = 5.20;
    let glovesCount = Math.ceil(paperRolls * 0.35);
    let brushesCount = Math.floor(paintBoxes * 0.48);

    let totalPaintPrice = paintBoxPrice * paintBoxes;
    let totalPaperPrice = paperRollPrice * paperRolls;
    let totalGlovesPrice = glovesCount * glovesPrice;
    let totalBrushPrice = brushesCount * brushPrice;
    let totalPrice = totalBrushPrice + totalGlovesPrice + totalPaintPrice + totalPaperPrice;
    let delivery = (totalPrice * 1) / 15;
   console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`)
}
repainting(10, 8, 2.2, 5)
repainting(21, 18, 5, 2.2)
repainting(1, 3, 10.9, 1)