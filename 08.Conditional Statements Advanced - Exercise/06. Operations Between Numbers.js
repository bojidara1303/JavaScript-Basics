function operation(data) {

    let firstNum = Number(data[0]);
    let secNum = Number(data[1]);
    let operator = data[2];
    let result = 0;

    if (operator === "+") {
        result = firstNum + secNum;
        if (result % 2 === 0) {
            type = "even"
        } else {
            type = "odd"
        }
        console.log(`${firstNum} ${operator} ${secNum} = ${result} - ${type}`)
    } else if (operator === "-") {
        result = firstNum - secNum;
        if (result % 2 === 0) {
            type = "even"
        } else {
            type = "odd"
        }
        console.log(`${firstNum} ${operator} ${secNum} = ${result} - ${type}`)
    } else if (operator === "*") {
        result = firstNum * secNum;
        if (result % 2 === 0) {
            type = "even"
        } else {
            type = "odd"
        }
        console.log(`${firstNum} ${operator} ${secNum} = ${result} - ${type}`)
    } else if (operator === "/") {
        if (secNum === 0) {
            console.log(`Cannot divide ${firstNum} by zero`)
        } else {
            result = firstNum / secNum;
            console.log(`${firstNum} / ${secNum} = ${result.toFixed(2)}`)
        }

    } else if (operator === "%") {
        if (secNum === 0) {
            console.log(`Cannot divide ${firstNum} by zero`)
        } else {
            result = firstNum % secNum;
            console.log(`${firstNum} % ${secNum} = ${result}`)
        }
    }
}
operation(["10", "12", "+"]);
operation(["10", "1", "-"]);
operation(["7", "3", "*"]);
operation(["123", "12", "/"]);
operation(["10", "3", "%"]);
operation(["112", "0", "/"]);
operation(["10", "0", "%"]);






