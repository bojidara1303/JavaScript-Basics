function projectCreation(data) {
    let name = data[0];
    let projects = Number(data[1])
    let hoursNeeded = 3 * projects;
    console.log(`The architect ${name} will need ${hoursNeeded} hours to complete ${projects} project/s.`)
}
projectCreation(["George",
    "4 "]);
projectCreation(["Sanya",
    "9 "])