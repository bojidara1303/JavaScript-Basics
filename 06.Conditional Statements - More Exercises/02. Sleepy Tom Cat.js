function cat(data) {

    let freeDays = Number(data[0]);
    let gameTimeInMins = 30000;
    let gameTimeInFreeDays = 127;
    let gameTimeInWorkDays = 63;
    let totalDaysCount = 365;

    let totalWorkDays = totalDaysCount - freeDays;
    let totalGameTime = (totalWorkDays * gameTimeInWorkDays) + (freeDays * gameTimeInFreeDays);
    let timeLeft = Math.abs(gameTimeInMins - totalGameTime);
    let totalHours = Math.floor(timeLeft / 60);
    let totalMins = timeLeft % 60;


    if (totalGameTime > 30000) {
        console.log("Tom will run away")
        console.log(`${totalHours} hours and ${totalMins} minutes more for play`)
    } else if (totalGameTime <= 30000) {
        console.log(`Tom sleeps well`)
        console.log(`${totalHours} hours and ${totalMins} minutes less for play`)
    }
}
cat(["20"]);
console.log("______________")
cat(["113"])