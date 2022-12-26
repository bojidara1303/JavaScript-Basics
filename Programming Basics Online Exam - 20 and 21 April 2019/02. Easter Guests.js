function easterGuests(data) {
    let guests = Number(data[0]);
    let budget = Number(data[1]);
    let bread = 4;
    let egg = 0.45;

    let countOfBread = Math.ceil(guests / 3);
    let countOfEggs = guests * 2;
    let totalForEggs = countOfEggs * egg;
    let totalBread = countOfBread * bread;
    let total = totalBread + totalForEggs;

    let diff = Math.abs(budget - total)
    if (budget >= total) {
        console.log(`Lyubo bought ${countOfBread} Easter bread and ${countOfEggs} eggs.`);
        console.log(`He has ${diff.toFixed(2)} lv. left.`)
    } else if (budget < total) {
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${diff.toFixed(2)} lv. more.`)
    }


}
easterGuests(["10",
    "35"])
console.log("_____________")
easterGuests(["9",
    "12"])
