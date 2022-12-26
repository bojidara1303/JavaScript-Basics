function password(data) {

    let pass = data[0];
    // let correct = "s3cr3t!P@ssw0rd"
    if (pass === "s3cr3t!P@ssw0rd") {
        console.log("Welcome")
    } else {
        console.log("Wrong password!")
    }

}
password(["qwerty"]);
password(["s3cr3t!P@ssw0rd"])