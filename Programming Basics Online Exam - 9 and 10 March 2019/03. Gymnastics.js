function gymnastics(data) {
    let country = data[0];
    let instrument = data[1];
    let difficulty = 0;
    let performance = 0;

    switch (country) {
        case 'Russia':
            switch (instrument) {
                case 'ribbon':
                    difficulty = 9.100;
                    performance = 9.400;
                    break;
                case 'hoop':
                    difficulty = 9.300;
                    performance = 9.800;
                    break;
                case 'rope':
                    difficulty = 9.600;
                    performance = 9.000;
                    break;
            }
            break;
        case 'Bulgaria':
            switch (instrument) {
                case 'ribbon':
                    difficulty = 9.600;
                    performance = 9.400;
                    break;
                case 'hoop':
                    difficulty = 9.550;
                    performance = 9.750;
                    break;
                case 'rope':
                    difficulty = 9.500;
                    performance = 9.400;
                    break;
            }
            break;

        case 'Italy':
            switch (instrument) {
                case 'ribbon':
                    difficulty = 9.200;
                    performance = 9.500;
                    break;
                case 'hoop':
                    difficulty = 9.450;
                    performance = 9.350;
                    break;
                case 'rope':
                    difficulty = 9.700;
                    performance = 9.150;
                    break;
            }
            break;
    }
    let totalScore = difficulty + performance;
    let pointsLeft = 20 - totalScore;
    let percent = (pointsLeft / 20) * 100;

    console.log(`The team of ${country} get ${totalScore.toFixed(3)} on ${instrument}.`)
    console.log(`${percent.toFixed(2)}%`)
}
gymnastics(["Bulgaria",
    "ribbon"])
console.log("_____________________")
gymnastics(["Russia",
    "rope"])
console.log("_____________________")
gymnastics(["Italy",
    "hoop"])
