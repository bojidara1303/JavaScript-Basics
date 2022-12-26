function easterEggs(data) {
    let count = Number(data[0])

    let redCounter = 0;
    let orangeCounter = 0;
    let blueCounter = 0;
    let greenCounter = 0;
    

    for (let i = 1; i <= count; i++) {
        let color = data[i]
        if (color === "red") {
            redCounter++;
        } else if (color === "orange") {
            orangeCounter++;
        } else if (color === "blue") {
            blueCounter++;
        } else if (color === "green") {
            greenCounter++;
        }

    }
    let res;
    if (redCounter > orangeCounter && redCounter > greenCounter && redCounter > blueCounter) {
        res = 'red'
    } else if (orangeCounter > redCounter && orangeCounter > greenCounter && orangeCounter > blueCounter) {
        res = 'orange'
    } else if (greenCounter > redCounter && greenCounter > orangeCounter && greenCounter > blueCounter) {
        res = 'green'
    } else if (blueCounter > redCounter && blueCounter > orangeCounter && blueCounter > greenCounter) { 
        res = 'blue' 
    }

    let maxNum = Math.max(redCounter, orangeCounter, blueCounter, greenCounter)

    console.log(`Red eggs: ${redCounter}`)
    console.log(`Orange eggs: ${orangeCounter}`)
    console.log(`Blue eggs: ${blueCounter}`)
    console.log(`Green eggs: ${greenCounter}`)
    console.log(`Max eggs: ${maxNum} -> ${res}`)

}
easterEggs(["7",
    "orange",
    "blue",
    "green",
    "green",
    "blue",
    "red",
    "green"])
console.log("____________________")
easterEggs(["4",
    "blue",
    "red",
    "blue",
    "orange"])
