function fishingBoat(data) {

    let budget = Number(data[0]);
    let season = data[1];
    let countFishermen = Number(data[2]);
    let price = 0;

    if (season === "Spring") {
        price += 3000;
    } else if (season === "Summer" || season === "Autumn") {
        price += 4200;
    } else if (season === "Winter") {
        price += 2600;
    }
    if (countFishermen <= 6) {
        price -= price * 0.10;
    } else if (countFishermen > 7 && countFishermen <= 11) {
        price -= price * 0.15;
    } else if (countFishermen >= 12) {
        price -= price * 0.25
    }
    
    if (countFishermen % 2 === 0 && season != "Autumn") {
        price -= price * 0.05;
    }

    let diff = Math.abs(budget - price);
    if (budget >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    } else if (budget < price) {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }

}
fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"])


