function numInRange(data) {

    let number = Number(data[0])

    if (number >= - 100 && number <= 100 && number !== 0) {
        console.log("Yes")

    } else {
        console.log("No")
    }

}
numInRange(["-25"]);
numInRange(["0"])
numInRange(["25"])