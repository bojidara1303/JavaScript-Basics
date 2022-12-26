function catWalking(data) {
    let minsPerWalk = Number(data[0]);
    let countWalksPerDay = Number(data[1]);
    let eatenCaloriesPerDay = Number(data[2]);
    let caloriesPerMinute = 5;
    let totalMinsPerDay = minsPerWalk * countWalksPerDay;
    let totalCalories = totalMinsPerDay * caloriesPerMinute;
    let halfCalories = eatenCaloriesPerDay / 2;

    if(totalCalories >= halfCalories){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCalories}.`)
    } else if (totalCalories < halfCalories){
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCalories}.`)
    }


}
catWalking(["30",
    "3",
    "600"])
catWalking(["15",
    "2",
    "500"])
catWalking(["40",
    "2",
    "300"])
