function swimming(data) {

    let recordInSec = Number(data[0]);
    let distance = Number(data[1]);
    let timePerOneMeter = Number(data[2]);
    let resistance = 12.5;

    let totalTime = timePerOneMeter * distance;
    let additTime = Math.floor(distance / 15) * resistance;
    let finalTime = totalTime + additTime

    if (recordInSec <= finalTime) {
        let diff = Math.abs(recordInSec - finalTime);
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`)
    }

}
swimming(["10464", "1500", "20"])
