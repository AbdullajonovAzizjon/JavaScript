  // easy-logical__part

//   let age = (prompt("Yoshingizni kiriting:"));
//   let talaba = prompt("Talabamisiz? (ha/yo'q)");

// if (age < 18 || talaba === "ha") {
//     alert("chipta narxi 5000 so'm");
// } else if (age < 18 || talaba === "yo'q") {
//     alert("chipta narxi 5000 so'm");
// } else if (age > 18 || talaba === "ha") {
//     alert("chipta narxi 5000 so'm");
// } else if(age > 18 || talaba === "yo'q"){
//   alert("chipta narxi 10000 so'm");
// }


// difficult-logical__part

let tool = prompt("Mahsulotni tanlang (telefon, noutbuk, quloqchin)");
let soni =prompt("Nechta mahsulot olasiz?");
let chegirma = prompt("Chegirma karta bormi? (ha/yo'q)");

let narx;

if (tool === "telefon") {
    narx = 200;
} else if (tool === "noutbuk") {
    narx = 800;
} else if (tool === "quloqchin") {
    narx = 50;
} else {
    alert("Bu mahsulot yo'q");
    narx = 0;
}

let hammasi = narx * soni;

if (chegirma === "ha" && hammasi > 300) {
    hammasi = hammasi * 0.9;
}

alert("To'lov summasi: $" + hammasi);



