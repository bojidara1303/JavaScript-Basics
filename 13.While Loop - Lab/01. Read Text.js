function words(data) {

    let index = 0;
    let command = data[index];
    index++;

    while (command !== "Stop") {
        console.log(command)
        command = data[index]
        index++;
    }
}
words(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])
