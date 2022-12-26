function cinemaTickets(data) {
    let index = 0;
    let command = data[index];

    let studentTicketsCounter = 0;
    let kidTicketsCounter = 0;
    let standardTicketsCounter = 0;

    while (command !== "Finish") {
        let movieName = data[index];
        index++;
        let allTickets = Number(data[index])
        let freeSpaceInTheCinema = allTickets;
        index++;
        let typeTicket = data[index];

        while (typeTicket !== "End") {
            switch (typeTicket) {
                case 'student':
                    studentTicketsCounter++;
                    break;

                case 'standard':
                    standardTicketsCounter++;
                    break;

                case 'kid':
                    kidTicketsCounter++;
                    break;
            }
            freeSpaceInTheCinema--;
            if (freeSpaceInTheCinema === 0) {
                break;
            }
            index++;
            typeTicket = data[index];
        }
        let boughtTickets = allTickets - freeSpaceInTheCinema;
        let boughtPercent = (boughtTickets / allTickets) * 100;

        console.log(`${movieName} - ${boughtPercent.toFixed(2)}% full.`)
        index++;
        command = data[index];
    }    
    let allBoughtTickets = standardTicketsCounter + studentTicketsCounter + kidTicketsCounter;
    let studentTicketsPercent = (studentTicketsCounter / allBoughtTickets) * 100;
    let standardTicketsPercent = (standardTicketsCounter / allBoughtTickets) * 100;
    let kidsTicketsPercent = (kidTicketsCounter / allBoughtTickets) * 100;

    console.log(`Total tickets: ${allBoughtTickets}`)
    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`)
    console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`)
    console.log(`${kidsTicketsPercent.toFixed(2)}% kids tickets.`)

}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
