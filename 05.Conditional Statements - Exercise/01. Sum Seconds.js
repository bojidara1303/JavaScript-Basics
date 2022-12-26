function sumSec(data) {

    let firstTime = Number(data[0]);
    let secTime = Number(data[1]);
    let thirdTime = Number(data[2]);
    let totalTimeInSec = firstTime + secTime + thirdTime;

    let minutes = Math.floor(totalTimeInSec / 60);
    let seconds = totalTimeInSec % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else if (seconds >= 10) {
        console.log(`${minutes}:${seconds}`)
    }
}
sumSec(["35", "45", "44"]);
sumSec(["14", "12", "10"]);
sumSec(["50",
"50",
"49"])


