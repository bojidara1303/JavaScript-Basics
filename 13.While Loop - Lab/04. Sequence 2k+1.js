function sequence(data) {

    let result = Number(data[0]);
    let num = 1;
    
    while (num <= result) {
        console.log(num)
        num = 2 * num + 1;
        
    }

}
sequence(["3"])
console.log("_______________")
sequence(["8"]);
console.log("_______________")
sequence(["17"]);
console.log("_______________")
sequence(["31"])