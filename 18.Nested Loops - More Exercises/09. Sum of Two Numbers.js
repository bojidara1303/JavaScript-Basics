function sum(data) {
    let initNum = Number(data[0]);
    let endNum = Number(data[1]);
    let magicNum = Number(data[2]);
    let isFound = false;
    let counter = 0;

    for (let i = initNum; i <= endNum; i++) {
        for (let k = initNum; k <= endNum; k++) {
            counter++;
           let result = i + k;
            
            if (result === magicNum) {
                console.log(`Combination N:${counter} (${i} + ${k} = ${result})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }

    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNum}`)
    }


}
sum(["1", "10", "5"]);
console.log("______________________")
sum(["23", "24", "20"]);
console.log("______________________")
sum(["88", "888", "1000"]);
console.log("______________________")
sum(["88", "888", "2000"])