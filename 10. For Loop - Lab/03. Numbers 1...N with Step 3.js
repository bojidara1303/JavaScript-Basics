function nums(data) {

    let lastNum = Number(data[0]);

    for (let i = 1; i <= lastNum; i += 3) {
        console.log(i)
    }


}
nums(["10"])
console.log('____________')
nums(["7"])
console.log('____________')
nums(["15"])