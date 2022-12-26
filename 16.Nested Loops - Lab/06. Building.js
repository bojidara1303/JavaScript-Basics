function building(data) {
    let floorCount = Number(data[0]);
    let roomsOnFloor = Number(data[1]);


    for (let f = floorCount; f > 0; f--) {
        let result = "";
        for (let r = 0; r < roomsOnFloor; r++) {
            if (f === floorCount) {
                result += `L${f}${r} `
            } else if (f % 2 === 1) {
                result += `A${f}${r} `
            } else {
                result += `O${f}${r} `;
            }
        }
        console.log(result)
    }


}
building(["6", "4"]);
console.log("____________________")
building(["9", "5"]);
console.log("____________________")
building(["4", "4"])