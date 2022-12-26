function nums(data) {

    let initNum = Number(data[0]);
    let finalNum = Number(data[1]);
    let sum = 0;


    for (let i = initNum; i <= finalNum; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }
    console.log("The sum: " + sum)

    for (let i = initNum; i <= finalNum; i++) {
        if (i % 9 === 0) {
            sum += i;
            console.log(i)
        }
    }
}
nums(["100", "200"])