let age = Number(prompt("Yoshingizni kiriting:"));
let talaba = prompt("Talabamisiz? (ha/yo'q)");

if ((age < 18 || talaba === "ha")) {
    console.log("chipta narxi 5000 so'm");
} else {
    console.log("chipta narxi 10000 so'm");
}
