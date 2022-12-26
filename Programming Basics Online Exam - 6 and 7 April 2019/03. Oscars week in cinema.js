function oscarsWeek(data) {
    let name = data[0];
    let hallType = data[1];
    let countTickets = Number(data[2]);
    let price = 0;

    switch (name) {
        case 'A Star Is Born':
            if (hallType === 'normal') {
                price = countTickets * 7.50;
            } else if (hallType === 'luxury') {
                price = countTickets * 10.50;
            } else if (hallType === 'ultra luxury') {
                price = countTickets * 13.50;
            }
            break;

        case 'Bohemian Rhapsody':
            if (hallType === 'normal') {
                price = countTickets * 7.35;
            } else if (hallType === 'luxury') {
                price = countTickets * 9.45;
            } else if (hallType === 'ultra luxury') {
                price = countTickets * 12.75;
            }
            break;

        case 'Green Book':
            if (hallType === 'normal') {
                price = countTickets * 8.15;
            } else if (hallType === 'luxury') {
                price = countTickets * 10.25;
            } else if (hallType === 'ultra luxury') {
                price = countTickets * 13.25;
            }
            break;

        case 'The Favourite':
            if (hallType === 'normal') {
                price = countTickets * 8.75;
            } else if (hallType === 'luxury') {
                price = countTickets * 11.55;
            } else if (hallType === 'ultra luxury') {
                price = countTickets * 13.95;
            }
            break;

    }

    console.log(`${name} -> ${price.toFixed(2)} lv.`)

}
oscarsWeek(["A Star Is Born",
    "luxury",
    "42"])
oscarsWeek(["Green Book",
    "normal",
    "63"])
oscarsWeek(["The Favourite",
    "ultra luxury",
    "34"])
