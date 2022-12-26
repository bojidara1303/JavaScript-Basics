function travelAgency(input) {
    let city = input[0]
    let packet = input[1]
    let hasDiscount = input[2]
    let days = Number(input[3])
    let dayPrice = 0;

    switch (city) {

        case "Bansko":
            if (packet === "noEquipment") {
                if (hasDiscount === "no") {
                    dayPrice = 80;
                } else if (hasDiscount === "yes") {
                    dayPrice = 80 - (80 * 0.05);
                }

            } else if (packet === "withEquipment")
                if (hasDiscount === "no") {
                    dayPrice = 100;
                } else if (hasDiscount === "yes") {
                    dayPrice = 100 - (100 * 0.10);
                }
            break;
        case "Borovets":
            if (packet === "noEquipment") {
                if (hasDiscount === "no") {
                    dayPrice = 80;
                } else if (hasDiscount === "yes") {
                    dayPrice = 80 - (80 * 0.05);
                }

            } else if (packet === "withEquipment")
                if (hasDiscount === "no") {
                    dayPrice = 100;
                } else if (hasDiscount === "yes") {
                    dayPrice = 100 - (100 * 0.10);
                }

            break;
        case "Varna":
            if (packet === "noBreakfast") {
                if (hasDiscount === "no") {
                    dayPrice = 100;
                } else if (hasDiscount === "yes") {
                    dayPrice = 100 - (100 * 0.07);
                }

            } else if (packet === "withBreakfast")
                if (hasDiscount === "no") {
                    dayPrice = 130;
                } else if (hasDiscount === "yes") {
                    dayPrice = 130 - (130 * 0.12);
                }

            break;
        case "Burgas":
            if (packet === "noBreakfast") {
                if (hasDiscount === "no") {
                    dayPrice = 100;
                } else if (hasDiscount === "yes") {
                    dayPrice = 100 - (100 * 0.07);
                }

            } else if (packet === "withBreakfast")
                if (hasDiscount === "no") {
                    dayPrice = 130;
                } else if (hasDiscount === "yes") {
                    dayPrice = 130 - (130 * 0.12);
                }

            break;

    }


    if (days < 1) {
        console.log("Days must be positive number!")
    } else if (city !== "Varna" && city !== "Burgas" && city !== "Bansko" && city !== "Borovets" || packet !== "noEquipment" && packet !== "withEquipment" && packet !== "withBreakfast" && packet !== "noBreakfast") {
        console.log("Invalid input!")
    } else if (days > 7) {
        console.log(`The price is ${((dayPrice * days) - dayPrice).toFixed(2)}lv! Have a nice time!`)
    }
    else {
        console.log(`The price is ${(dayPrice * days).toFixed(2)}lv! Have a nice time!`)
    }
}

travelAgency(["Borovets",
    "noEquipment",
    "yes",
    "6"])
travelAgency(["Bansko",
    "withEquipment",
    "no",
    "2"])
travelAgency(["Varna",
    "withBreakfast",
    "yes",
    "5"])
travelAgency(["Burgas",
    "noBreakfast",
    "no",
    "4"])
travelAgency(["Varna",
    "withBreakfast",
    "no",
    "0"])
travelAgency(["Gabrovo",
    "noBreakfast",
    "no",
    "3"])
   