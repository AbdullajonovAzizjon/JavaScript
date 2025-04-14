  // easy-logical__part


// let age = prompt("Yoshingizni kiriting:");
// let talaba = prompt("Talabamisiz? (ha/yo'q)");

// if (talaba === "ha") {
//     alert("chipta narxi 5000 so'm");
// } else if (age < 18) {
//     alert("chipta narxi 5000 so'm");
// } else {
//     alert("chipta narxi 10000 so'm");
// }

let age = prompt("Yoshingizni kiriting:");
let student = prompt("Talabamisiz? (ha/yo'q)");

let cost = (student === "ha" || age < 18) ? "chipta narxi 5000 so'm" : "chipta narxi 10000 so'm";

alert(cost);



// difficult-logical__part

// let tool = prompt("Mahsulotni tanlang (telefon, noutbuk, quloqchin)");
// let soni =prompt("Nechta mahsulot olasiz?");
// let chegirma = prompt("Chegirma karta bormi? (ha/yo'q)");

// let narx;

// if (tool === "telefon") {
//     narx = 200;
// } else if (tool === "noutbuk") {
//     narx = 800;
// } else if (tool === "quloqchin") {
//     narx = 50;
// } else {
//     console.log(alert(`Bu mahsulot yo'q`));
//     narx = 0;
// }

// let hammasi = narx * soni;

// if (chegirma === "ha" && hammasi > 300) {
//     hammasi = hammasi * 0.9;
// }

// console.log(alert("To'lov summasi: $" + hammasi));



