function cinema(data) {
    let type = data[0];
    let rows = Number(data[1]);
    let columns = Number(data[2]);
    let totalMoney = 0;

    switch (type) {
        case 'Premiere':
            totalMoney = rows * columns * 12;
            break;
        case 'Normal':
            totalMoney = rows * columns * 7.5;
            break;
        case 'Discount':
            totalMoney = rows * columns * 5;
            break;
    }

    console.log(`${totalMoney.toFixed(2)} leva`)


}
cinema(["Premiere",
    "10",
    "12"])
cinema(["Normal",
    "21",
    "13"])
cinema(["Discount",
    "12",
    "30"])
