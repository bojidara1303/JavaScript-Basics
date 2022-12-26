function char(data) {
    let word = data[0];

    for (let i = 0; i <= word.length - 1; i++) {
        let letter = word[i];
        console.log(letter)
    }
}
char(["softuni"])
console.log("____________")
char(["ice cream"])