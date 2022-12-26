function kingKong(data) {
    let discount = 0;
    let diff;
    let budget = Number(data[0]);
    let peopleCount = Number(data[1]);
    let clothesPricePerPerson = Number(data[2]);
    let decor = budget * 0.1;
    let totalMoneyforClothes = peopleCount * clothesPricePerPerson;
    if (peopleCount >= 150) {
        discount = totalMoneyforClothes * 0.1;
    }
    let totalMoney = decor + totalMoneyforClothes - discount;

    if (budget >= totalMoney) {
        diff = budget - totalMoney;
        console.log("Action!")
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    } else if (totalMoney > budget) {
        diff = Math.abs(budget - totalMoney)
        console.log("Not enough money!")
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    }

}
kingKong(["20000", "120", "55.5"])
console.log("__________________");
kingKong(["15437.62", "186", "57.99"])
console.log("__________")
kingKong(["9587.88", "222", "55.68"])
