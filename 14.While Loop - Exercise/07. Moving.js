function moving(data) {
    let index = 0;
    let roomWidth = Number(data[index]);
    index++;
    let roomLength = Number(data[index]);
    index++;
    let roomHeight = Number(data[index]);
    index++;

    let totalVol = roomWidth * roomLength * roomHeight;
    let packs = 0;
    let command = data[index];
    index++;
    
    while (command !== "Done") {
        let currPacks = Number(command);
        packs += currPacks;

        if (totalVol < packs) {
            break;
        }
        command = data[index];
        index++;
    }
    let diff = Math.abs(totalVol - packs)
    if (packs < totalVol) {
        console.log(`${diff} Cubic meters left.`)
    } else {
        console.log(`No more free space! You need ${diff} Cubic meters more.`)
    }
}
moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])
