function changeBureau(data) {
    let bitcoinCount = Number(data[0]);
    let chineseCurrencyCount = Number(data[1]);
    let commision = Number(data[2]);
    let oneBitcoinInLeva = 1168;
    let oneChineseCurrencyInDolars = 0.15;
    let oneDollarInLeva = 1.76;
    let oneEuroInLeva = 1.95;

    let totalChineseInLeva = (chineseCurrencyCount * oneChineseCurrencyInDolars) * oneDollarInLeva;
    let totalBitcoinInLeva = bitcoinCount * oneBitcoinInLeva;
    let totalMoney = (totalChineseInLeva + totalBitcoinInLeva) / oneEuroInLeva;
    let finalMoney = totalMoney - (totalMoney * commision) / 100;
    console.log(finalMoney.toFixed(2))


}
changeBureau(["1",
    "5",
    "5"])
changeBureau(["20",
    "5678",
    "2.4"])
changeBureau(["7",
    "50200.12",
    "3"])
