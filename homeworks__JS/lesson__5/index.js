  // easy-logical__part

  let age = (prompt("Yoshingizni kiriting:"));
  let talaba = prompt("Talabamisiz? (ha/yo'q)");

if (age < 18 || talaba === "ha") {
    console.log("chipta narxi 5000 so'm");
} else if (age < 18 || talaba === "yo'q") {
    console.log("chipta narxi 5000 so'm");
} else if (age > 18 || talaba === "ha") {
    console.log("chipta narxi 5000 so'm");
} else {
    console.log("chipta narxi 10000 so'm");
}


// difficult-logical__part

let mahsulot = prompt("Mahsulot turini kiriting (telefon, laptop, quloqchin):");
let soni = Number(prompt("Nechta mahsulot olmoqchisiz?"));
let chegirma = prompt("Chegirma kartangiz bormi? (ha/yo'q)");

let narx;

if (mahsulot === "telefon") {
    narx = 200;
} else if (mahsulot === "laptop") {
    narx = 800;
} else if (mahsulot === "quloqchin") {
    narx = 50;
} else {
    console.log("Noto'g'ri mahsulot turi kiritildi.");
    narx = 0;
}

let hammasi = narx * soni;

if (chegirma === "ha" && jami > 300) {
    hammasi = hammasi * 0.9; // 10% chegirma
}

console.log("To'lov summasi: $" + hammasi);



