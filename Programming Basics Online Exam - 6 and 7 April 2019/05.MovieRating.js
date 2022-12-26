function movie(input) {
 
    let moviesCount = Number(input[0]);
 
    let minRating = input[2];
    let maxRating = input[2];
 
    let worstMovieName;
    let bestMovieName;
    let avgRating = 0;
 
    for (let i = 1; i < input.length; i++) {
 
        let rating = Number(input[i += 1]);
        avgRating += rating;
 
        if (rating <= minRating) {
            minRating = rating;
            worstMovieName = `${input[i - 1]} is with lowest rating: ${(minRating).toFixed(1)}`;
        }
        if (rating >= maxRating) {
            maxRating = rating;
            bestMovieName = `${input[i - 1]} is with highest rating: ${(maxRating).toFixed(1)}`
        }
 
    }
    console.log(bestMovieName);
    console.log(worstMovieName);
    console.log(`Average rating: ${(avgRating / moviesCount).toFixed(1)}`);
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
    //100/100