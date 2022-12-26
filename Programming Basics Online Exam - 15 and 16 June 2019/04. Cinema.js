function cinema(data) {
    let capacity = Number(data[0]);
    let price = 0;
    let index = 1;
    let command = data[index];
    let seats = 0;

    while (command) {
        if (command === "Movie time!") {
            break;
        }
        command = Number(data[index])
        seats += command;
        let currentMoney = command * 5;
        if (command % 3 === 0) {
            currentMoney = currentMoney - 5;
        }
        price += currentMoney;
        index++;
        command = data[index]
        
    }

    let diff = Math.abs(capacity - seats)
    if (capacity >= seats) {
        console.log(`There are ${diff} seats left in the cinema.`)
        console.log(`Cinema income - ${price} lv.`)
    } else if (capacity < seats){
        console.log("The cinema is full.")
        console.log(`Cinema income - ${price} lv.`)
    }
   

}
cinema(["60",
    "10",
    "6",
    "3",
    "20",
    "15",
    "Movie time!"])
console.log("___________________")
cinema(["50",
    "15",
    "10",
    "10",
    "15",
    "5"])
console.log("___________________")
cinema(["100",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "Movie time!"])
