function series(data) {
    let name = data[0];
    let seasons = Number(data[1])
    let episodes = Number(data[2]);
    let episodeDuration = Number(data[3]);
    let comercialsDur = episodeDuration * 0.2;
    let finalEpisode = episodeDuration + 10 + comercialsDur;
    let totalEpisodeDur = episodeDuration + comercialsDur;
    let totalTimePerSeason = (episodes - 1) * totalEpisodeDur + finalEpisode;
    let totalTimeNeeded = totalTimePerSeason * seasons;

    console.log(`Total time needed to watch the ${name} series is ${totalTimeNeeded} minutes.`)


}
series(["Lucifer",
    "3",
    "18",
    "55"])
console.log("___________________");
series(["Game of Thrones",
    "7",
    "10",
    "50"])
console.log("___________________");
series(["Riverdale",
    "3",
    "21",
    "45"])
