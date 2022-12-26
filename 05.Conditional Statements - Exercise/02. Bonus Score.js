function bonus(data) {

    let initPoints = Number(data[0]);
    let bonusScore = 0;

    if (initPoints <= 100) {
        bonusScore = 5;
    } else if (initPoints > 100 && initPoints < 1000) {
        bonusScore = initPoints * 0.2;
    } else if (initPoints >= 1000) {
        bonusScore = initPoints * 0.1
    }

    if (initPoints % 2 == 0) {
        bonusScore += 1;
    } else if (initPoints % 10 == 5) {
        bonusScore += 2
    }

    let totalPoints = initPoints + bonusScore;

    console.log(bonusScore)
    console.log(totalPoints)

}
bonus(["20"]);
bonus(["2703"]);