function deposit(data) {
    let initDeposit = Number(data[0]);
    let depositTerm = Number(data[1]);
    let yearPercent = Number(data[2]);

    let interest = initDeposit * (yearPercent / 100);
    let interestPerMonth = interest / 12;

    let total = initDeposit + depositTerm * interestPerMonth;
    console.log(total)

}
deposit(["200 ", "3 ", "5.7 "]);
deposit(["2350", "6 ", "7 "])