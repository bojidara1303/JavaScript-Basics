function workout(data) {
    let index = 0;
    let days = Number(data[index++]);
    let kmFirstDay = Number(data[index++]);
    let previousDay = kmFirstDay;
    let currentDay = 0;
    let totalKm = kmFirstDay;

    for (let i = 0; i <= days; i++) {
        if (i === 1) {
            continue;
        }

        let percent = Number(data[index++])

        currentDay = previousDay + previousDay * percent / 100
        totalKm += currentDay
        previousDay = currentDay

    }


    if (totalKm >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(totalKm - 1000)} more kilometers!`)
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalKm)} more kilometers`)
    }
}
workout(["5",
    "30",
    "10",
    "15",
    "20",
    "5",
    "12"])
workout(["4",
    "100",
    "30",
    "50",
    "60",
    "80"])
