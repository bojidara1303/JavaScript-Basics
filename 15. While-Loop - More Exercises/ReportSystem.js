function reportSystem(input) {
    let moneyNeeded = Number(input[0]);
    let moneySaved = 0;
    let moneyCashCount = 0;
    let moneyCash = 0;
    let moneyCardCount = 0;
    let moneyCard = 0;
    let index = 1;
 
    while (moneySaved < moneyNeeded) {
        let currentTransaction = input[index];
        if (currentTransaction === "End") {
            console.log("Failed to collect required money for charity.");
            break;
        }
        currentTransaction = Number(currentTransaction);
        if (index % 2 !== 0 && currentTransaction <= 100) {
            moneyCash += currentTransaction;
            moneyCashCount++;
            moneySaved += currentTransaction
            console.log("Product sold!");
            index++
            currentTransaction = input[index];
        }
        else if (index % 2 !== 0 && currentTransaction > 100) {
            console.log("Error in transaction!");
            index++
            currentTransaction = input[index];
        }
        else if (index % 2 === 0 && currentTransaction >= 10) {
            moneyCard += currentTransaction;
            moneyCardCount++;
            moneySaved += currentTransaction
            console.log("Product sold!");
            index++
            currentTransaction = input[index];
        }
        else if (index % 2 == 0 && currentTransaction < 10) {
            console.log("Error in transaction!");
            index++
            currentTransaction = input[index];
        }
    }
    if (moneySaved >= moneyNeeded && index === "End") {
        console.log(`Average CS: ${(moneyCash / moneyCashCount).toFixed(2)}`);
        console.log(`Average CC: ${(moneyCard / moneyCardCount).toFixed(2)}`);
    }
    if (moneySaved >= moneyNeeded) {
        console.log(`Average CS: ${(moneyCash / moneyCashCount).toFixed(2)}`);
        console.log(`Average CC: ${(moneyCard / moneyCardCount).toFixed(2)}`);
    }
}

reportSystem(["500", "120", "8", "63", "256", "78", "317"])
console.log("___________________________")
reportSystem(["600", "86", "150", "98", "227", "End"])