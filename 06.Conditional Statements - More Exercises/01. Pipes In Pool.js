function pipes(data) {
    let poolVolume = Number(data[0]);
    let firstPipeFlowPerHour = Number(data[1]);
    let secondPipeFlowPerHour = Number(data[2]);
    let hours = Number(data[3]);

    let totalDebitFirstPipe = firstPipeFlowPerHour * hours;
    let totalDebitSecPipe = secondPipeFlowPerHour * hours;
    let totalDebit = totalDebitFirstPipe + totalDebitSecPipe;

   
    let totalDebitPercent = (totalDebit / poolVolume) * 100;

    let firstPercent = (totalDebitFirstPipe / totalDebit) * 100;
    let secPercent = (totalDebitSecPipe / totalDebit) * 100;


    if (totalDebit <= poolVolume) {
        console.log(`The pool is ${totalDebitPercent.toFixed(2)}% full. Pipe 1: ${firstPercent.toFixed(2)}%. Pipe 2: ${secPercent.toFixed(2)}%.`)
    } else {
        let diff = totalDebit - poolVolume;
        console.log(`For ${hours} hours the pool overflows with ${diff.toFixed(2)} liters.`)
    }


}
pipes(["1000", "100", "120", "3"])
console.log("___________");
pipes(["100", "100", "100", "2.5"])