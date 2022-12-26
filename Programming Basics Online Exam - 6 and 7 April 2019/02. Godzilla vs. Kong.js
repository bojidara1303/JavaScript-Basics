function godzilla(data) {
    let budget = Number(data[0]);
    let statistCount = Number(data[1]);
    let clotherPerOneStatist = Number(data[2]);
    let decorPrice = budget * 0.1;
    let totalMoneyForClothes = statistCount * clotherPerOneStatist;

    if (statistCount > 150) {
        totalMoneyForClothes = totalMoneyForClothes * 0.9;
    }

    let totalMoney = totalMoneyForClothes + decorPrice;
    let diff = Math.abs(budget - totalMoney)
    if (budget >= totalMoney) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    } else if (budget < totalMoney) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    }
}
godzilla(["20000",
    "120",
    "55.5"])
console.log("______________")
godzilla(["15437.62",
    "186",
    "57.99"])
console.log("______________")
godzilla(["9587.88",
    "222",
    "55.68"])
