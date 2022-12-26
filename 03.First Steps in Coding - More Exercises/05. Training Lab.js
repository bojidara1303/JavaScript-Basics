function training(data) {
    let roomHeight = Number(data[0]) * 100;
    let roomWidth = Number(data[1]) * 100 - 100;

    let workPlaceHeight = 120;
    let workPlaceWith = 70;
    let workPlacesLost = 3;

    let workPlacesInWidth = Math.floor(roomWidth / workPlaceWith);
    let workPlacesInHeight = Math.floor(roomHeight / workPlaceHeight);
    let totalPraceCount = (workPlacesInHeight * workPlacesInWidth) - workPlacesLost;
    console.log(totalPraceCount)
}
training(["15", "8.9"])