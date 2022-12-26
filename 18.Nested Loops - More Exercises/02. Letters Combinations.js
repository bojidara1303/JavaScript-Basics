function letters(data) {
    let firstLetter = data[0];
    let secondLetter = data[1];
    let exception = data[2];
    let counter = 0;

    let firstChar = firstLetter.charCodeAt();
    let secChar = secondLetter.charCodeAt();
    let exceptionChar = exception.charCodeAt();

    let res = "";

    for (let i = firstChar; i <= secChar; i++) {
        for (let k = firstChar; k <= secChar; k++) {
            for (let m = firstChar; m <= secChar; m++) {
                if (i === exceptionChar || k === exceptionChar || m == exceptionChar) {
                    res += ""
                } else {
                    counter++
                    
                    res += `${String.fromCharCode(i)}${String.fromCharCode(k)}${String.fromCharCode(m)} `
                }
            }
        }
    }

    console.log(`${res}${counter}`)

}
letters(["a", "c", "b"])
console.log("______________________")
letters(["f", "k", "h"])
console.log("______________________")
letters(["a", "c", "z"])
console.log("______________________")