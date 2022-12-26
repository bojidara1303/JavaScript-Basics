function easterBattle(data) {
    let index = 0;
    let eggsFirstPlayer = Number(data[index]);
    index++;
    let eggsSecPlayer = Number(data[index]);
    index++;

    while (data[index] !== "End") {
        let command = data[index];
        if (command === 'one') {
            eggsSecPlayer--;
        } else if (command === 'two') {
            eggsFirstPlayer--;
        }
        
        if (eggsFirstPlayer <= 0) {
            console.log(`Player one is out of eggs. Player two has ${eggsSecPlayer} eggs left.`);
            break;
        } else if (eggsSecPlayer <= 0) {
            console.log(`Player two is out of eggs. Player one has ${eggsFirstPlayer} eggs left.`);
            break;
        }
        index++;
       
    } 
    if (eggsFirstPlayer > 0 && eggsSecPlayer > 0) {
        console.log(`Player one has ${eggsFirstPlayer} eggs left.`)
    } 
     if (eggsSecPlayer > 0 && eggsFirstPlayer > 0) {
        console.log(`Player two has ${eggsSecPlayer} eggs left.`)
    }
}
easterBattle(["5", "4", "one", "two", "one", "two", "two", "End"]);
console.log("_________________")
easterBattle(["2", "6", "one", "two", "two"]);
console.log("_________________")
easterBattle(["6", "3", "one", "two", "two", "one", "one"])