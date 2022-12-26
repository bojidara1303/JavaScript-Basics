function convert(data) {
    let bgn = Number(data[0])
    let usd = 1.79549;
    let result = bgn * usd;

    console.log(result)


}
convert(["22"]);
convert(["100"]);
convert(["12.5"])