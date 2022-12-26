function weatherForecast(data) {

    let weather = data[0];
    if (weather === "sunny") {
        console.log("It's warm outside!")
    } else {
        console.log("It's cold outside!")
    }


}
weatherForecast(["sunny"]);
weatherForecast(["cloudy"]);
weatherForecast(["snowy"]);