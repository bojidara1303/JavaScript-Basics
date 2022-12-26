function multiply(data) {

    for (let i = 0; i < data.length; i++) {
        let num = Number(data[i])
        if (num >= 0) {
            console.log(`Result: ${(num * 2).toFixed(2)}`)
        } else {
            console.log("Negative number!")
        }
    }
}
multiply(["12", "43.2144", "12.3", "543.23", "-20"]);
console.log("___________________");
multiply(["23.43",
    "12.3245",
    "0",
    "65.23432",
    "23",
    "65",
    "-12"
])