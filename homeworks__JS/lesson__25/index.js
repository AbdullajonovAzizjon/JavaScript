// №---1

// (function(a) {
//     if (a === 20252025) {
//         console.log("Xush kelibsiz");
//     } else {
//         console.log("Parol xato, qaytadan kiritib ko'ring");
//     }
// })(prompt("Parolni kiriting:"));


// №---2

// let countUp = (function () {
//     let counter = 0;
//     return function () {
//         console.log(++counter);
//     };
// })();

// countUp();

// №---3

// let calc = function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1); 
//     }
// };

// console.log(calc(5));

// №---4

// let calcPower = function power(a, b) {
//     if (b === 0) {
//         return 1;
//     } else {
//         return a * power(a, b - 1);
//     }
// };
// console.log(calcPower(10, 100));


№---5
for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  
№---6

let count = 0;

function sayHello() {
  if (count < 5) {
    console.log("Hello");
    count++;
    setTimeout(sayHello, 2000); 
  }
}

sayHello();


№---7

let fruits = ["olma", "banan", "nok", "gilos"];
let i = 0;

function showFruit() {
  if (i < fruits.length) {
    console.log(fruits[i]);
    i++;
    setTimeout(showFruit, 2000);
  }
}

showFruit();


№---8

setTimeout(() => {
    console.log("Xush kelibsiz!");
  }, 3000);
  

№---9

let errorTimeout = setTimeout(() => {
    console.log("Xatolik!");
  }, 5000);
  
  // Faraz qilaylik, 3 sekunddan keyin xatoni bekor qilamiz:
  setTimeout(() => {
    clearTimeout(errorTimeout);
    console.log("Xatolik bekor qilindi!");
  }, 3000);
  