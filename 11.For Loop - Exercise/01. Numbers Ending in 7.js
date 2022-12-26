function numsEndingInSeven() {

    let initNum = 1;
    let finalNum = 1000;

    for (let i = initNum; i <= finalNum; i++) {
        if (i % 10 === 7){
            console.log(i)
        }
    }
}
numsEndingInSeven()