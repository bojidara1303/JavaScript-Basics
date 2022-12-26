function bookList(data) {

    let pages = Number(data[0]);
    let pagesPerHour = Number(data[1]);
    let days = Number(data[2]);

    let totalHours = pages / pagesPerHour;
    let hoursPerDay = totalHours / days;

    console.log(hoursPerDay)

}
bookList(["212 ", "20 ", "2 "])