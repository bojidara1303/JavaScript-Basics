function sum(data) {
    let index = 0;

    let sumPrime = 0;
    let sumNonPrime = 0;

    while (data[index] !== "stop") {
        let num = Number(data[index]);
        if (num < 0) {
            console.log("Number is negative.");
        } else {
            isPrime = true;
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                sumPrime += num;
            } else {
                sumNonPrime += num;
            }
        }

        index++;
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`)


}
sum(["3", "9", "0", "7", "19", "4", "stop"]);
console.log("___________________________")
sum(["30", "83", "33", "-1", "20", "stop"]);
console.log("___________________________")
sum(["0", "-9", "0", "stop"]);

