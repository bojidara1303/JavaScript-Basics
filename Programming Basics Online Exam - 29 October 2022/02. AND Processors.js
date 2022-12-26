function andProcessors(input) {
    let processorsCount = Number(input[0]);
    let numberEmployees = Number(input[1]);
    let workingDays = Number(input[2]);
    let hoursPerOneProcessor = 3;
    let workingHoursPerDay = 8;
    let processorPrice = 110.10;

    let totalHours = numberEmployees * workingDays * workingHoursPerDay;
    let processorsMade = Math.floor(totalHours / hoursPerOneProcessor);
    let diff;

    if (processorsMade >= processorsCount) {
        diff = processorsMade - processorsCount
        console.log(`Profit: -> ${(diff * processorPrice).toFixed(2)} BGN`)
    } else {
        diff = processorsCount - processorsMade;
        console.log(`Losses: -> ${(diff * processorPrice).toFixed(2)} BGN`)
    }
}
andProcessors(["500",
    "8",
    "20"])
andProcessors(["150",
    "7",
    "18"])

