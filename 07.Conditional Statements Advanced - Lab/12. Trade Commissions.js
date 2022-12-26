function trade(data) {

    let town = data[0];
    let sales = Number(data[1]);
    let comission = 0;

    if (sales >= 0 && sales <= 500) {
        switch (town) {
            case 'Sofia':
                comission = sales * 0.05;
                break;
            case 'Varna':
                comission = sales * 0.045;
                break;
            case 'Plovdiv':
                comission = sales * 0.055;
                break;
        }
    } else if (sales > 500 && sales <= 1000) {
        switch (town) {
            case 'Sofia':
                comission = sales * 0.07;
                break;
            case 'Varna':
                comission = sales * 0.075;
                break;
            case 'Plovdiv':
                comission = sales * 0.08;
                break;
        }
    } else if (sales > 1000 && sales <= 10000) {
        switch (town) {
            case 'Sofia':
                comission = sales * 0.08;
                break;
            case 'Varna':
                comission = sales * 0.1;
                break;
            case 'Plovdiv':
                comission = sales * 0.12;
                break;
        }
    } else if (sales > 10000) {
        switch (town) {
            case 'Sofia':
                comission = sales * 0.12;
                break;
            case 'Varna':
                comission = sales * 0.13;
                break;
            case 'Plovdiv':
                comission = sales * 0.145;
                break;
        }
    }
    if (comission != 0) {
        console.log(comission.toFixed(2))
    } else {
        console.log("error")
    }
}
trade(["Sofia", "1500"]);
trade(["Plovdiv", "499.99"]);
trade(["Varna", "3874.50"]);
trade(["Kaspichan", "-50"])



