function filmPremiere(data) {
    let name = data[0];
    let packet = data[1];
    let ticketsCount = Number(data[2])
    let price = 0;

    switch (name) {
        case 'John Wick':
            if (packet === "Drink") {
                price = ticketsCount * 12;
            } else if (packet === "Popcorn") {
                price = ticketsCount * 15;
            } else if (packet === "Menu") {
                price = ticketsCount * 19;
            }
            break;

        case 'Star Wars':
            if (packet === "Drink") {
                price = ticketsCount * 18;
            } else if (packet === "Popcorn") {
                price = ticketsCount * 25;
            } else if (packet === "Menu") {
                price = ticketsCount * 30;
            }
            break;

        case 'Jumanji':
            if (packet === "Drink") {
                price = ticketsCount * 9;
            } else if (packet === "Popcorn") {
                price = ticketsCount * 11;
            } else if (packet === "Menu") {
                price = ticketsCount * 14;
            }
            break;
    }

    if (name === "Star Wars" && ticketsCount >= 4) {
        price = price * 0.7
    } else if (name === "Jumanji" && ticketsCount === 2) {
        price = price * 0.85
    }
    console.log(`Your bill is ${price.toFixed(2)} leva.`)

}
filmPremiere(["John Wick",
    "Drink",
    "6"])
filmPremiere(["Star Wars",
    "Popcorn",
    "4"])
filmPremiere(["Jumanji",
    "Menu",
    "2"])
