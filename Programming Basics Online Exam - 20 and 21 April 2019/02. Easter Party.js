function easterParty(data) {
    let guestCount = Number(data[0]);
    let pricePerOne = Number(data[1]);
    let budget = Number(data[2]);
    let cake = budget * 0.1;

    if (guestCount >= 10 && guestCount <= 15) {
        pricePerOne = pricePerOne * 0.85;
    } else if (guestCount > 15 && guestCount <= 20) {
        pricePerOne = pricePerOne * 0.8;
    } else if (guestCount > 20) {
        pricePerOne = pricePerOne * 0.75;
    }

    let total = guestCount * pricePerOne + cake;

    let diff = Math.abs(budget - total);
    if (budget >= total) {
        console.log(`It is party time! ${diff.toFixed(2)} leva left.`)
    } else if (budget < total) {
        console.log(`No party! ${diff.toFixed(2)} leva needed.`)
    }


}
easterParty(["18",
    "30",
    "450"])
easterParty(["8",
    "25",
    "340"])
easterParty(["24",
    "35",
    "550"])
