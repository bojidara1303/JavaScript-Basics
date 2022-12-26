function reportSystem(data) {
    let index = 0;
    let expectedMoney = Number(data[index])
    index++;
    let command = data[index];
    let sumInCash = 0;
    let sumCrCard = 0;
    let peopleInCash = 0;
    let peopleCrCard = 0;
    let sum = 0;

    while (command) {
        let transaction = Number(data[index]);
        if (command === "End") {
            console.log("Failed to collect required money for charity.")
            break;
        }
        if (index % 2 === 1) {
            if (transaction > 100) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                sumInCash += transaction;
                sum += sumInCash;
                peopleInCash++;
            }
        } else if (index % 2 === 0) {
            if (transaction < 10) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                sumCrCard += transaction;
                sum += sumCrCard;
                peopleCrCard++;
            }
        }
        index++;
        command = data[index];
    }

    let avgCS = sumInCash / peopleInCash;
    let avgCC = sumCrCard / peopleCrCard;

    if (sum < expectedMoney) {
        console.log("Failed to collect required money for charity.");
    } else {
        console.log(`Average CS: ${avgCS.toFixed(2)}`);
        console.log(`Average CC: ${avgCC.toFixed(2)}`)
    }

}
reportSystem(["500", "120", "8", "63", "256", "78", "317"])
console.log("___________________________")
reportSystem(["600", "86", "150", "98", "227", "End"])

//90/100