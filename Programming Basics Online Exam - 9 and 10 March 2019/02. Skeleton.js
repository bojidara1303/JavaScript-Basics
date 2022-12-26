function skeleton(data) {
    let minutes = Number(data[0]);
    let seconds = Number(data[1]);
    let length = Number(data[2]);
    let seconsPer100Metres = Number(data[3]);

    let totalControlTimeSec = minutes * 60 + seconds;
    let timeLess = length / 120;
    let additTime = timeLess * 2.5;
    let playerTime = (length / 100) * seconsPer100Metres - additTime;
    let timeNeeded = Math.abs(totalControlTimeSec - playerTime);

    if (totalControlTimeSec >= playerTime) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${playerTime.toFixed(3)}.`)
    } else if (totalControlTimeSec < playerTime) {
        console.log(`No, Marin failed! He was ${timeNeeded.toFixed(3)} second slower.`)
    }

}
skeleton(["2",
    "12",
    "1200",
    "10"])
console.log("_______________________")
skeleton(["1",
    "20",
    "1546",
    "12"])
