function division() {
    let initNum = 1;
    let endNum = 100;

    while (initNum <= endNum) {
        if (initNum % 3 === 0) {
            console.log(initNum)
        }
        initNum++;
    }
}
division()