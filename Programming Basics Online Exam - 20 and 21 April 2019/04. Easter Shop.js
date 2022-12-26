function easterShop(data) {
    let index = 0;
    let initialEggsCount = Number(data[index])
    index++;
    let command = data[index];
    let count;
    let eggsSold = 0;

    while (command) {
        command = data[index];
        index++;
        switch (command) {
            case 'Buy':
                count = command = Number(data[index]);
                if (initialEggsCount >= count) {
                    initialEggsCount -= count;
                    eggsSold += count;
                } else {
                    console.log("Not enough eggs in store!")
                    console.log(`You can buy only ${initialEggsCount}.`)
                }
                break;
            case 'Fill':
                count = command = Number(data[index]);
                initialEggsCount += count;
                break;
        }
        if (command === "Close") {
            console.log("Store is closed!")
            console.log(`${eggsSold} eggs sold.`)
        }

        index++;
        command = data[index]
    }

}
easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
console.log("___________________")
easterShop(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"])
