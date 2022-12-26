function fishTank(data) {
    let length = Number(data[0]);
    let width = Number(data[1]);
    let height = Number(data[2])
    let percentage = Number(data[3]) / 100;
    let volumeInCm = length * width * height * 0.001;
    let litersNeeded = volumeInCm - volumeInCm * percentage
    console.log(litersNeeded)


}
fishTank(["85 ",
    "75 ",
    "47 ",
    "17 "])