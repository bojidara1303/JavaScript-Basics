function hospital(data) {
    let days = Number(data[0]);
    let doctorsCount = 7;
    let treatedCount = 0;
    let untreatedCount = 0;

    for (let i = 1; i <= days; i++) {
        let patientsCount = Number(data[i]);
        if (i % 3 === 0 && untreatedCount > treatedCount) {
            doctorsCount++;
        }
        if (patientsCount <= doctorsCount) {
            treatedCount += patientsCount;
        } else if (patientsCount > doctorsCount) {
            treatedCount += doctorsCount;
            untreatedCount += patientsCount - doctorsCount;
        }
    }
    console.log(`Treated patients: ${treatedCount}.`);
    console.log(`Untreated patients: ${untreatedCount}.`)

}
hospital(["4", "7", "27", "9", "1",]);
console.log("_______________")
hospital(["6", "25", "25", "25", "25", "25", "2"]);
console.log("_________________");
