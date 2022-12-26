function ceremony(data) {

    let rent = Number(data[0]);

    let statuettes = rent * 0.7;
    let catering = statuettes * 0.85;
    let sound = catering * 0.5;

    let totalMoney = rent + statuettes + catering + sound;
    console.log(totalMoney.toFixed(2))


}
ceremony(["3500"])
ceremony(["5555"])