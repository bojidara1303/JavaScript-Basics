function titles(data) {

    let age = Number(data[0]);
    let gender = data[1];

    switch (gender) {
        case 'f':
            if (age < 16) {
                console.log("Miss");
            } else if (age >= 16) {
                console.log("Ms.")
            }
            break;
        case 'm':
            if (age < 16) {
                console.log("Master");
            } else if (age >= 16) {
                console.log("Mr.")
            }
            break;
    }
}
titles(["12", "f"]);
titles(["17", "m"]);
titles(["25", "f"]);
titles(["13.5", "m"])



