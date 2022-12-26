function evenNums(data){

let num = Number(data[0]);

for(let i = 0; i <= num; i+=2){
    console.log(Math.pow(2,i))
}


}
evenNums(["3"])
console.log("_________________")
evenNums(["4"])
console.log("_________________")
evenNums(["5"])
console.log("_________________")
evenNums(["6"])
console.log("_________________")
evenNums(["7"])