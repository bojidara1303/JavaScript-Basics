function coins(data) {
    let change = data[0];
    let convertChange = parseInt(change * 100);
    let coins = 0;

    while (convertChange > 0) {
        if (convertChange - 200 >= 0) {
            convertChange -= 200;
        } else if (convertChange - 100 >= 0) {
            convertChange -= 100;
        } else if (convertChange - 50 >= 0) {
            convertChange -= 50;
        } else if (convertChange - 20 >= 0) {
            convertChange -= 20;
        } else if (convertChange - 10 >= 0) {
            convertChange -= 10;
        } else if (convertChange - 5 >= 0) {
            convertChange -= 5;
        } else if (convertChange - 2 >= 0) {
            convertChange -= 2;
        } else if (convertChange - 1 >= 0) {
            convertChange -= 1;
        }
        coins++;
    }

    console.log(`${coins}`)

}
coins(["1.23"])
coins(["2"])
coins(["0.56"])
coins(["2.73"])