function cinema(data) {
    let index = 0;
    let line = data[index];

    let countStandardTickets = 0;
    let countKidTickets = 0;
    let countStudentTickets = 0;

    while (line !== "Finish") {
        let movieName = line;
        index++;
        let allTickets = Number(data[index]);
        let freeSpaceInTheCinema = allTickets;
        index++;
        let ticketType = data[index];

        while (ticketType !== "End") {
            switch (ticketType) {
                case 'standard':
                    countStandardTickets++;
                    break;

                case 'kid':
                    countKidTickets++;
                    break;

                case 'student':
                    countStudentTickets++;
                    break;
            }
            freeSpaceInTheCinema--;
            if (freeSpaceInTheCinema === 0) {
                break;
            }
            index++;
            ticketType = data[index];
        }
        let boughtTickets = allTickets - freeSpaceInTheCinema;
        let percentageFull = (boughtTickets / allTickets) * 100;

        console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);
        index++;
        line = data[index];
    }
    let allBoughtTickets = countKidTickets + countStandardTickets + countStudentTickets;
    console.log(`Total tickets: ${allBoughtTickets}`);
    console.log(`${(countStudentTickets / allBoughtTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(countStandardTickets / allBoughtTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(countKidTickets / allBoughtTickets * 100).toFixed(2)}% kids tickets.`);

}
cinema(["Taxi",
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
console.log("_____________________")
cinema(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])
