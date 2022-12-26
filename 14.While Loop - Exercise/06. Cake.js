function cake(data) {
    let index = 0;
    let cakeWidth = Number(data[index]);
    index++;
    let cakeHeight = Number(data[index]);
    index++;
    let command = data[index];
    index++;

    let totalPieces = (cakeWidth * cakeHeight) / 1;
    let takenPieces = 0;

    while (command !== "STOP") {
        let currentTakenPieces = Number(command)
        takenPieces += currentTakenPieces;

        if (totalPieces < takenPieces) {
            break;
        }
        command = data[index];
        index++;
    }
    let diff = Math.abs(totalPieces - takenPieces);

    if (takenPieces < totalPieces) {
        console.log(`${diff} pieces are left.`)
    } else {
        console.log(`No more cake left! You need ${diff} pieces more.`)
    }


}


cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]);
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])

