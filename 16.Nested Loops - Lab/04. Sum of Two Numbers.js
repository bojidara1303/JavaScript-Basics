function sum(data) {
    let firstNum = Number(data[0]);
    let secNum = Number(data[1]);
    let magicNum = Number(data[2]);
    let isFound = false;
    let counter = 0;

    for (let i = firstNum; i <= secNum; i++) {
        for (let k = firstNum; k <= secNum; k++) {
            counter++;
            let res = i + k;

            if (res === magicNum) {
                console.log(`Combination N:${counter} (${i} + ${k} = ${res})`);
                isFound = true;
                break;
            } 
        }
        if(isFound){
            break;
        }
    }
if(!isFound){
    console.log(`${counter} combinations - neither equals ${magicNum}`);
}



}
sum(["1", "10", "5"]);
sum(["23", "24", "20"]);
sum(["88", "888", "1000"]);
sum(["88", "888", "2000"])



