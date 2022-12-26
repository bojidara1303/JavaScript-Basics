function greater(data) {

    let firstNum = Number(data[0]);
    let secNum = Number(data[1]);

    if (firstNum > secNum) {
        console.log(firstNum)
    } else {
        console.log(secNum)
    }


}
greater(["5", "3"])
greater(["-5", "5"])