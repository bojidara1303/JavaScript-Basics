function specialNums(data) {
    let num = Number(data[0]);
    let res = "";

    for (let i = 1111; i < 9999; i++) {
        let n = "" + i;
        if (num % n.charAt(0) === 0 && num % n.charAt(1) === 0 && num % n.charAt(2) === 0 && num % n.charAt(3) === 0) {
            res += i + " ";
        }
    }
console.log(res)


}
specialNums(["3"])
console.log("_____________________")
specialNums(["11"])
console.log("_____________________")
specialNums(["16"])