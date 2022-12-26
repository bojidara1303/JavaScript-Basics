function fifteenMins(data) {

    let hours = Number(data[0]);
    let minutes = Number(data[1]);

    let newMin = minutes + 15;
    if (newMin > 59) {
        hours += 1
        newMin = newMin % 60;
    }
    if(hours > 23){
        hours = 0
    }
    if (newMin < 10) {
        console.log(`${hours}:0${newMin}`)
    } else if(newMin >= 10){
        console.log(`${hours}:${newMin}`)
    }

}
fifteenMins(["1", "46"]);
fifteenMins(["0", "01"]);
fifteenMins(["12", "49"])
fifteenMins(["23", "49"])