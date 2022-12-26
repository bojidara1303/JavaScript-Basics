function birthdayParty(data) {
    let rent = Number(data);
    // console.log(rent)
    let cake = rent * 0.2;
    let drinks = cake - (cake * 0.45)
    let animator = (rent * 1) / 3;
    let totalMoney = rent + cake + drinks + animator;
    console.log(totalMoney)
}
birthdayParty(2250);
birthdayParty(3720)