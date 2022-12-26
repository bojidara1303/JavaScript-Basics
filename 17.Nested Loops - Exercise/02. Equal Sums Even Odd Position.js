function equalSum(data) {
    let firstNum = Number(data[0]);
    let secNum = Number(data[1]);

    let result = "";

    for (let i = firstNum; i <= secNum; i++) {
        let currentNum = "" + i;
        let sumOdds = 0;
        let sumEvens = 0;
        for (let digit = 0; digit < currentNum.length; digit++) {
            let currentDigit = Number(currentNum.charAt(digit));
            if (digit % 2 === 0) {
                sumEvens += currentDigit;
            } else {
                sumOdds += currentDigit;
            }
        }
        if (sumEvens === sumOdds) {
            result += `${i} `
        }
    }

    console.log(result)

}
equalSum(["100000", "100050"]);
console.log('_____________________________')
equalSum(["123456", "124000"])

