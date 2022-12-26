function travelling(data) {
    let destination = data[0];
    let budget = Number(data[1]);
    let savings = 0;

    let index = 1;
    index++;
    while (destination !== "End") {
        while (savings < budget) {
            savings += Number(data[index]);
            index++;
        }
        console.log(`Going to ${destination}!`)
        destination = data[index];
        index++;
        budget = Number(data[index]);
        index++;
        savings = 0;
    }
}
travelling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])
console.log("_______________________")
travelling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])
