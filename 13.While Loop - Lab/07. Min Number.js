function minNum(data) {
    let index = 0;
    let command = data[index];
    index++;

    let minNumber = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);

        if (minNumber > num) {
            minNumber = num;
        }
        command = data[index];
        index++;
    }
    console.log(minNumber)


}
minNum(["100",
    "99",
    "80",
    "70",
    "Stop"])
minNum(["-10",
    "20",
    "-30",
    "Stop"])
