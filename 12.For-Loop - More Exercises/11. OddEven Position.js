function evenOdd(data) {
    let numCount = Number(data[0]);

    let oddSum = 0;
    let oddMin;
    let oddMax;

    let evenSum = 0;
    let evenMin;
    let evenMax;


    for (let i = 1; i <= numCount; i++) {
        let num = Number(data[i]);
        if (i % 2 === 1) {
            if (i === 1) {
                oddMin = Number(data[1])
                oddMax = Number(data[1])
            }
            oddSum += num;
            if (num > oddMax) {
                oddMax = num
            }

            if (num < oddMin) {
                oddMin = num;
            }

        } else if (i % 2 === 0) {
            if (i === 2) {
                evenMin = Number(data[2])
                evenMax = Number(data[2])
            }
            evenSum += num;
            if (num > evenMax) {
                evenMax = num;
            }
            if (num < evenMin) {
                evenMin = num;
            }
        }
    }


    console.log(`OddSum=${oddSum.toFixed(2)},`)
    if (numCount <= 0) {
        console.log("OddMin=No,")
    } else {
        console.log(`OddMin=${oddMin.toFixed(2)},`)
    }

    if (numCount <= 0) {
        console.log("OddMax=No,")
    } else {
        console.log(`OddMax=${oddMax.toFixed(2)},`)
    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`)

    if (numCount <= 1) {
        console.log("EvenMin=No,")
    } else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`)
    }

    if (numCount <= 1) {
        console.log("EvenMax=No")
    } else {
        console.log(`EvenMax=${evenMax.toFixed(2)}`)
    }


}
evenOdd(["6", "2", "3", "5", "4", "2", "1"])
console.log("___________________")
evenOdd(["5", "3", "-2", "8", "11", "-3"])
console.log("_____________________")
evenOdd(["2", "1.5", "-2.5"])
console.log("____________________")
evenOdd(["4", "1.5", "1.75", "1.5", "1.75"])
console.log("___________________")
evenOdd(["1", "1"])
console.log("_____________________")
evenOdd(["1", "-5"])
console.log("_________________")
evenOdd(["0"])
console.log("_______________________")
evenOdd(["3", "-1", "-2", "-3"])

//80/100