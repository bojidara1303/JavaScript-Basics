function password(data) {
    let index = 0;
    let username = data[index];
    index++;
    let password = data[index];
    index++;
    let passwordData = data[index];
    index++;
    while (passwordData !== password) {
        passwordData = data[index];
        index++
    }

    console.log(`Welcome ${username}!`)

}
password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])
