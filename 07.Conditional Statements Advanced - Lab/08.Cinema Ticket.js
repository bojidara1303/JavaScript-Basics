function cinema(data) {
    let day = data[0];

    if (day === "Monday" || day === "Tuesday" || day === "Friday") {
        console.log("12")
    } else if (day === "Wednesday" || day === "Thursday") {
        console.log("14")
    } else if (day === "Saturday" || day === "Sunday") {
        console.log("16")
    }
}
cinema(["Monday"]);
cinema(["Sunday"]);