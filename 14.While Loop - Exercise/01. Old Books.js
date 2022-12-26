function oldBooks(data) {
    let searchedBook = data[0];

    let index = 1;
    let isFound = false;
    let nextBook = data[index];

    while (nextBook !== "No More Books") {
        if (nextBook === searchedBook) {
            isFound = true;
            break;
        }
        index++;
        nextBook = data[index];
    }
    
    if (isFound) {
        console.log(`You checked ${index - 1} books and found it.`)
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    }

}
oldBooks(["Troy",
    "Stronger",
    "Life Style",
    "Troy"]);
oldBooks(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])
oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])
