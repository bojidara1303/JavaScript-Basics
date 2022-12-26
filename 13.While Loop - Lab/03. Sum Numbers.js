function sumNums(data) {
    let index = 0;
    let initialNum = Number(data[index]);
    index++;
    let num = Number(data[index]);
    index++;

    let sum = 0;

    while (sum < initialNum) {
        sum += num
        num = Number(data[index]);
        index++
    }

    console.log(sum)
}
sumNums(["100",
    "10",
    "20",
    "30",
    "40"])
sumNums(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])
