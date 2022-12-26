function average(data) {
    let numsCount = Number(data[0])
    let count = numsCount;

    let index = 1;
    let num = data[index];
    let sum = 0;

    while (numsCount > 0) {
        num = Number(data[index]);
        sum += num

        num = data[index];
        index++;
        numsCount--;  
    }

    let res = sum / count
    console.log(res.toFixed(2))

}
average(["4", "3", "2", "4", "2"])
console.log("_________")
average(["2", "6", "4"])
console.log("_________")
average(["3", "82", "43", "22"])