function oscars(data) {
    let index = 0;
    let actorName = data[index];
    index++;
    let initialPoints = Number(data[index]);
    index++;
    let countOfPeople = Number(data[index]);
    index++;

    let hasNomination = false;

    for (let i = 0; i < countOfPeople; i++) {
        let name = data[index];
        index++;
        let namePoints = Number(data[index]);
        index++;

        initialPoints += (name.length * namePoints) / 2;


        if (initialPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${initialPoints.toFixed(1)}!`);
            hasNomination = true;
            break;
        }
    }
    
    if (!hasNomination) {
        let diff = Math.abs(initialPoints - 1250.5);
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`)
    }

}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])
console.log("__________________")
oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])

