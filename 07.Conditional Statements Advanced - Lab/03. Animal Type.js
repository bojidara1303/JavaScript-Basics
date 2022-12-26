function animals(data) {

    let animal = data[0];

    switch (animal) {
        case 'dog':
            console.log("mammal")
            break;
        case 'snake':
        case 'crocodile':
        case 'tortoise':
            console.log("reptile");
            break;
        default:
            console.log("unknown")
            break;
    }
}
animals(["dog"]);
animals(["snake"]);
animals(["cat"])