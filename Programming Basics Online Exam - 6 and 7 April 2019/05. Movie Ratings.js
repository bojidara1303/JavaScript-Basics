function movie(data) {

    let countMovies = Number(data[0])
    let currentCount = countMovies;
    let index = 1;
    let movieName = data[index];

    let ratingCounter = 0;
    let maxRating = 0;
    let minRating = 0;
    let maxName;
    let minName;

    while (currentCount > 0) {
        movieName = data[index];
        index++;
        let currRating = Number(data[index]);
        ratingCounter += currRating;
        
        if (currRating > maxRating) {
            maxRating = currRating;
            maxName = movieName;
            
        } else if (currRating > 0) {
            minRating = currRating;
            minName = movieName;
        }
        currentCount--;
        index++;

    }
    console.log(`${maxName} is with highest rating: ${maxRating}`)
    console.log(`${minName} is with lowest rating: ${minRating}`)
    let avgRating = ratingCounter / countMovies;
    console.log(`Average rating: ${avgRating.toFixed(1)}`)
}
movie(["5",
    "A Star is Born",
    "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1"])
console.log("____________________")
movie(["3",
    "Interstellar",
    "8.5",
    "Dangal",
    "8.3",
    "Green Book",
    "8.2"])

//66/100