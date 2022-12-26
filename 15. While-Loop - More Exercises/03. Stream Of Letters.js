function stream(data) {
    let index = 0;
    let command = data[index];
    let res = "";
    let oCounter = 0;
    let cCounter = 0;
    let nCounter = 0;
    let ch;

    while (command !== "End") {
        let char = command.charCodeAt()

        if (char <= 64 && char >= 91 && char <= 96 && char >= 123 && char !== 99 && char !== 110 && char !== 111) {
            // command = `${""}`
            res += `${""}`
        } else  {
            res += `${command}`
        }

        if (command === "n") {
            nCounter++;
            if (nCounter > 1) {
                res += `${command}`
            }
        }
        if (command === "o") {
            oCounter++;
            if (oCounter > 1) {
                res += `${command}`
            }
        }
        if (command === "c") {
            cCounter++;
            if (cCounter > 1) {
                res += `${command}`
            }
        }
        if (cCounter === 1 && oCounter === 1 && nCounter === 1) {
            console.log(`${res}`)
        } 
     
        index++;
        command = data[index];

    }

    // console.log(res)


}
stream(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"])