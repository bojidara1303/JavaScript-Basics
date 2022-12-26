function basketball(data) {

    let moneyPerYear = Number(data[0]);
    let shoesPrice = moneyPerYear - moneyPerYear * 0.4;
    let equipment = shoesPrice - shoesPrice * 0.2;
    let ball = equipment * 0.25;
    let accesories = ball * 0.2;
    let totalMoney = moneyPerYear + shoesPrice + equipment + ball + accesories;
    console.log(totalMoney)
}
basketball(["365 "])