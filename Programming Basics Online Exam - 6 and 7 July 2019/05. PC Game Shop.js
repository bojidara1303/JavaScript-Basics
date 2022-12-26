function pcShop(data) {
    let gamesSold = Number(data[0]);

    let hearthstoneCounter = 0;
    let forniteCounter = 0;
    let overwatchCounter = 0;
    let others = 0;

    for (let i = 1; i <= gamesSold; i++) {
        let game = data[i];

        if (game === "Hearthstone") {
            hearthstoneCounter++;
        } else if (game === "Fornite") {
            forniteCounter++;
        } else if (game === "Overwatch") {
            overwatchCounter++;
        } else {
            others++;
        }
    }
    let hearthstonePercent = (hearthstoneCounter / gamesSold) * 100;
    let fornitePercent = (forniteCounter / gamesSold) * 100;
    let overwatchPercent = (overwatchCounter / gamesSold) * 100;
    let othersPercent = (others / gamesSold) * 100;

    console.log(`Hearthstone - ${hearthstonePercent.toFixed(2)}%`);
    console.log(`Fornite - ${fornitePercent.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchPercent.toFixed(2)}%`);
    console.log(`Others - ${othersPercent.toFixed(2)}%`)

}
pcShop(["4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"])
console.log("_______________")
pcShop(["3",
    "Hearthstone",
    "Diablo 2",
    "Star Craft 2"])
