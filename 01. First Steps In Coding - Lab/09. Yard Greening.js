function yardGreeninig(data) {

    let area = Number(data[0])
    let pricePerSqMeter = 7.61;
    let discountPercent = 0.18;
    let discount = pricePerSqMeter * area * discountPercent;
    let price = (pricePerSqMeter * area) - discount
    console.log(`The final price is: ${price} lv.`)
    console.log(`The discount is: ${discount} lv.`)


}
yardGreeninig(["550"]);
yardGreeninig(["150"]);