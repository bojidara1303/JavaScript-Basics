function newHouse(data) {
    let type = data[0];
    let flowerCount = Number(data[1]);
    let budget = Number(data[2]);
    let rosePrice = 5;
    let dahliaPrice = 3.8;
    let tulipPrice = 2.8;
    let narcissusPrice = 3;
    let gladiolusPrice = 2.5;
    let price = 0;
   

    switch (type) {
        case 'Roses':
            if (flowerCount > 80) {
                price -= 0.1 * flowerCount * rosePrice;
            }
            price += flowerCount * rosePrice;
            break;

            case 'Dahlias':
                if (flowerCount > 90) {
                    price -= 0.15 * flowerCount * dahliaPrice;
                }
                price += flowerCount * dahliaPrice;
                break;

        case 'Tulips':
            if (flowerCount > 80) {
                price -= 0.15 * flowerCount * tulipPrice;
            }
            price += flowerCount * tulipPrice;
            break;

        case 'Narcissus':
            if (flowerCount < 120) {
                price += flowerCount * narcissusPrice * 0.15;
            }
            price += flowerCount * narcissusPrice;
            break;

        case 'Gladiolus':
            if (flowerCount < 80) {
                price += flowerCount * gladiolusPrice * 0.2;
            }
            price += flowerCount * gladiolusPrice;
            break;
    }
    let diff = Math.abs(price - budget)

    if (price <= budget) {
        diff = budget - price;
        console.log(`Hey, you have a great garden with ${flowerCount} ${type} and ${diff.toFixed(2)} leva left.`)
    } if (price > budget) {
        diff = Math.abs(budget - price);
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }
}

newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);

