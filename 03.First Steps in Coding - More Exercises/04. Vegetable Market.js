function market(data) {
    let vegetPrice = Number(data[0]);
    let fruitPrice = Number(data[1]);
    let vegetKg = Number(data[2]);
    let fruitKg = Number(data[3]);
    let totalVegPrice = (vegetPrice * vegetKg) + (fruitPrice * fruitKg)
    let euro = 1.94;
    let finalPrice = totalVegPrice / euro
    console.log(finalPrice.toFixed(2))

}
market(["0.194", "19.4", "10", "10"])