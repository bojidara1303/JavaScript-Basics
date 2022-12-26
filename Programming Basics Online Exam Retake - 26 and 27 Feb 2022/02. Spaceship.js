function spaceship(data) {
    let spaceshipWidth = Number(data[0]);
    let spaceshipLength = Number(data[1]);
    let spaceshipHeight = Number(data[2]);
    let personLength = Number(data[3]);

    let roomVol = 2 * 2 * (personLength + 0.40);
    let spaceshipVol = spaceshipHeight * spaceshipLength * spaceshipWidth;
    let peopleCount = Math.floor(spaceshipVol / roomVol)

    if (peopleCount >= 3 && peopleCount <= 10) {
        console.log(`The spacecraft holds ${peopleCount} astronauts.`)
    } else if (peopleCount < 3) {
        console.log("The spacecraft is too small.")
    } else if (peopleCount > 10) {
        console.log("The spacecraft is too big.")
    }


}
spaceship(["3.5",
    "4",
    "5",
    "1.70"])
spaceship(["4.5",
    "4.8",
    "5",
    "1.75"])
spaceship(["3",
    "3",
    "4",
    "1.68"])
