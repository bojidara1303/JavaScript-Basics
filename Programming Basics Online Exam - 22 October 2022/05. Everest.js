function everest(data) {
    let meters = 5364;
    let dayCounter = 1;
    let index = 0;
    let command = data[index];

    while (command !== "END") {
        if (command === "END") {
            break;
        }
        let night = data[index]

        if (night === "Yes") {
            dayCounter++;
            if (dayCounter > 5) {
                break;
            }
        } else if (night === "No") {
            dayCounter === dayCounter
        }
        index++;
        let currentMeters = Number(data[index])
        meters += currentMeters;

        if (meters >= 8848) {
            console.log(`Goal reached for ${dayCounter} days!`)
            break;
        }

        index++;
        command = data[index]
    }
    if (meters < 8848) {
        console.log("Failed!")
        console.log(`${meters}`)
    }
}

everest(["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"])
console.log("_________________")
everest(["Yes",
"1000",
"Yes",
"945",
"No",
"1200",
"END"])
console.log("_________________")
everest(["Yes",
"535",
"Yes",
"849",
"Yes",
"499",
"Yes",
"400",
"Yes",
"500"])
console.log("_________________")
everest(["Yes",
"700",
"END"])
