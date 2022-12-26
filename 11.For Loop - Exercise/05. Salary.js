function salary(data) {
    let index = 0;
    let openTabs = Number(data[index]);
    index++;
    let salary = Number(data[index]);
    index++;

    let haveSalary = true;

    let facebook = 150;
    let instagram = 100;
    let reddit = 50;
    let website;

    for (let i = 0; i < openTabs; i++) {
        website = data[index];
        index++;


        if (website === "Facebook") {
            salary -= 150;
        } else if (website === "Instagram") {
            salary -= 100;
        } else if (website === "Reddit") {
            salary -= 50;
        }

        if (salary <= 0) {
            console.log("You have lost your salary.");
            haveSalary = false;
            break;
        }
    }
    if (haveSalary) {
        console.log(salary)
    }
}

salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])
