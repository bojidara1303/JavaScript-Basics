function maxNum(data){

let index = 0;
let command = data[index];
index++;

let maxNumber = Number.MIN_SAFE_INTEGER;

while(command !== "Stop"){
    let num = Number(command);

    if(maxNumber < num){
        maxNumber = num;
    }
    command = data[index];
    index++
}

console.log(maxNumber)

}
maxNum(["100",
"99",
"80",
"70",
"Stop"])
