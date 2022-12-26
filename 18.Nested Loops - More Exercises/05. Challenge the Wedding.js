function wedding(data) {
    let menCount = Number(data[0]);
    let womenCount = Number(data[1]);
    let maxTableCount = Number(data[2]);
    let counter = 0;
    let res = " ";
 
    for (let i = 1; i <= menCount; i++) {
        for (let k = 1; k <= womenCount; k++) {
            if (counter < maxTableCount) {
                res += ` (${i} <-> ${k})`
            }
            counter++;
        }
    }

    console.log(res)

}
wedding(["2", "2", "6"]);
console.log("________________________")
wedding(["2", "2", "3"])
console.log("________________________")
wedding(["5", "8", "40"])