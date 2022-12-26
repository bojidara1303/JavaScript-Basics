function basketball(data) {
    let yearTax = Number(data[0]);
    let sneakers = yearTax * 0.6;
    let equipment = sneakers * 0.8;
    let ball = equipment * 0.25;
    let accesories = ball * 0.2;
    let totalMoney = yearTax + sneakers + equipment + ball + accesories;
    console.log(totalMoney.toFixed(2))

}
basketball(["320"])
console.log("___________________")
basketball(["550"])
console.log("___________________")
basketball(["230"])