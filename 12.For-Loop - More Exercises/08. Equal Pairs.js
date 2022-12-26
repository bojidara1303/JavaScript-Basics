function equalPairs(input) {
    let countOfPairs = Number(input[0]);
    let pair = 0;
    let newPair = 0;
    let firstNum = 0;
    let secNum = 0;
    let diff = 0;
    let areEqual = true;

    for (let i = 1; i < input.length; i++) {
        if (i % 2 !== 0) {
            firstNum = Number(input[i]);
        } else {
            secNum = Number(input[i]);
        }

        if (i % 2 === 0) {
            pair = firstNum + secNum;
            if (countOfPairs === 1) {
                newPair = pair;
            }
        }

        if (pair !== newPair) {
            diff = pair - newPair;
            if (diff !== 0) {
                areEqual = false;
            }
        } else {
            areEqual = true;
        }

        newPair = pair;
    }

    if (areEqual) {
        console.log(`Yes, value=${pair}`);
    } else {
        console.log(`No, maxdiff=${Math.abs(diff)}`);
    }
}

equalPairs(["3", "1", " 2", "0", "3", "4", " -1"]);
equalPairs(["4", "1", "1", "3", "  1", "2", "2", " 0", "0"])