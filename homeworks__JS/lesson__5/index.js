  // easy-logical__part

// let age = prompt("Yoshingizni kiriting:");
// let student = prompt("Talabamisiz? (ha/yo'q)");

// let cost = (student === "ha" || age < 18) ? "chipta narxi 5000 so'm" : "chipta narxi 10000 so'm";

// alert(cost);



// difficult-logical__part

let tool = prompt("Mahsulotni tanlang (telefon, noutbuk, quloqchin)");
let nechtaligi = prompt("Nechta mahsulot olasiz?");
let chegirma = prompt("Chegirma karta bormi? (ha/yo'q)");

let narx = tool === "telefon" ? 200 :
           tool === "noutbuk" ? 800 :
           tool === "quloqchin" ? 50 :
           console.log((alert("Bu mahsulot yo'q"), 0));

let hammasi = narx * nechtaligi;
hammasi = (chegirma === "ha" && hammasi > 300) ? hammasi * 0.9 : hammasi;

console.log(alert("To'lov summasi: $" + hammasi));




