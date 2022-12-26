function flower(data) {
    let chrysanthemumCount = Number(data[0]);
    let rosesCount = Number(data[1]);
    let tulipsCount = Number(data[2]);
    let season = data[3];
    let isHoliday = data[4];
    let additTax = 2;
    let chrysanthemumPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    switch (season) {
        case 'Spring':
            // chrysanthemumPrice = chrysanthemumCount * 2;
            // rosesPrice = rosesCount * 4.10;
            // tulipsPrice = tulipsCount * 2.50;
            // break;
        case 'Summer':
            chrysanthemumPrice = chrysanthemumCount * 2;
            rosesPrice = rosesCount * 4.10;
            tulipsPrice = tulipsCount * 2.50;
            break;
        case 'Autumn':
            // chrysanthemumPrice = chrysanthemumCount * 3.75;
            // rosesPrice = rosesCount * 4.50;
            // tulipsPrice = tulipsCount * 4.15;
            // break;
        case 'Winter':
            chrysanthemumPrice = chrysanthemumCount * 3.75;
            rosesPrice = rosesCount * 4.50;
            tulipsPrice = tulipsCount * 4.15;
            break;
    }
    let totalPrice = chrysanthemumPrice + rosesPrice + tulipsPrice;
    let totalFlowerCount = chrysanthemumCount + rosesCount + tulipsCount;

    switch (isHoliday) {
        case 'N':
            totalPrice = totalPrice;
            break;
        case 'Y':
            totalPrice = totalPrice + (totalPrice * 0.15)
    }

    if (season === 'Spring' && tulipsCount >= 7) {
        totalPrice = totalPrice * 0.95;
    } else if (season === 'Winter' && rosesCount >= 10) {
        totalPrice = totalPrice * 0.9;
    }
    if (totalFlowerCount > 20) {
        totalPrice = totalPrice * 0.8;
    }

    let finalPrice = totalPrice + additTax

    console.log(finalPrice.toFixed(2))

}
flower(["2", "4", "8", "Spring", "Y"]);
console.log("______________________")
flower(["3", "10", "9", "Winter", "N"]);
console.log("______________________")
flower(["10", "10", "10", "Autumn", "N"]);