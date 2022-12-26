function smallShop(data) {
    let product = data[0];
    let town = data[1];
    let quantity = Number(data[2]);
    let price = 0;

    switch (product) {
        case 'coffee':
            if (town === "Sofia") {
                price = quantity * 0.50;
            } else if (town === "Plovdiv") {
                price = quantity * 0.40;
            } else if (town === "Varna") {
                price = quantity * 0.45;
            }
            break;

        case 'water':
            if (town === "Sofia") {
                price = quantity * 0.80;
            } else if (town === "Plovdiv") {
                price = quantity * 0.70;
            } else if (town === "Varna") {
                price = quantity * 0.70;
            }
            break;

        case 'beer':
            if (town === "Sofia") {
                price = quantity * 1.20;
            } else if (town === "Plovdiv") {
                price = quantity * 1.15;
            } else if (town === "Varna") {
                price = quantity * 1.10;
            }
            break;

        case 'sweets':
            if (town === "Sofia") {
                price = quantity * 1.45;
            } else if (town === "Plovdiv") {
                price = quantity * 1.30;
            } else if (town === "Varna") {
                price = quantity * 1.35;
            }
            break;

        case 'peanuts':
            if (town === "Sofia") {
                price = quantity * 1.60;
            } else if (town === "Plovdiv") {
                price = quantity * 1.50;
            } else if (town === "Varna") {
                price = quantity * 1.55;
            }
            break;
    }
    console.log(price)

}
smallShop(["coffee", "Varna", "2"]);
smallShop(["peanuts", "Plovdiv", "1"]);
smallShop(["beer", "Sofia", "6"]);
smallShop(["water", "Plovdiv", "3"]);
smallShop(["sweets", "Sofia", "2.23"])




