function movieDay(data) {
    let timeForShooting = Number(data[0]);
    let scenesNum = Number(data[1]);
    let timePerScene = Number(data[2]);
    let preparationTime = timeForShooting * 0.15;
    let totalTime = scenesNum * timePerScene + preparationTime;

    let diff = Math.abs(timeForShooting - totalTime);
    if (timeForShooting >= totalTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(diff)} minutes left!`)
    } else if (timeForShooting < totalTime) {
        console.log(`Time is up! To complete the movie you need ${Math.ceil(diff)} minutes.`)
    }

}
movieDay(["120",
    "10",
    "11"])
movieDay(["60",
    "15",
    "3"])
