function mountainRun(data) {
    let recordInSec = Number(data[0]);
    let distanceInMeters = Number(data[1]);
    let timePerOneMeter = Number(data[2]);
    let additTime = Math.floor(distanceInMeters / 50) * 30;
    let totalTime = (distanceInMeters * timePerOneMeter) + additTime;
    let diff = Math.abs(recordInSec - totalTime)
    if (totalTime < recordInSec) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`)
    } else if (totalTime >= recordInSec) {
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`)
    }

}
mountainRun(["10164",
    "1400",
    "25"])
mountainRun(["5554.36",
    "1340",
    "3.23"])
mountainRun(["1377",
    "389",
    "3"])
