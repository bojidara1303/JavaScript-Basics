function invNum(data) {

    let num = Number(data[0]);

    if (num >= 100 && num <= 200 || num === 0) {
        console.log()
    } else {
        console.log("invalid")
    }
}
invNum(["75"]);
invNum(["150"])