function lunch(data) {
    let name = data[0];
    let episodeDurat = Number(data[1]);
    let breakDurat = Number(data[2]);

    let timeForRelax = (breakDurat * 1) / 4;
    let timeForLunch = (breakDurat * 1) / 8;
    let leftTime = breakDurat - (timeForRelax + timeForLunch);

    if (leftTime >= episodeDurat) {
        let freeTime = leftTime - episodeDurat;
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(freeTime)} minutes free time.`)
    } else {
        let timeNeeded = Math.abs(episodeDurat - leftTime)
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }
}

lunch(["Game of Thrones",
    "60",
    "96"])
console.log("_________________")
lunch(["Teen Wolf",
    "48",
    "60"])
