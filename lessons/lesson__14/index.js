// part---1

// №--1

// function check(str1, str2){
//     for(let value of str2){
//         if(!str1.includes(value)) return false;
//     }
//     return true;
// }

// console.log(check("webbrain academy", "acsa"));
// console.log(check("webbrain academy", "webbrain"));

// №--2

// function getCount(str) {
//     let result = {};
//     for (let char of str) {
//       if (char === " ") continue; // bo‘sh joylarni hisoblama
//       result[char] = (result[char] || 0) + 1;
//     }
//     return result;
//   }
  
//   console.log(getCount("webbrain")); 
//   // {w:1, e:1, b:2, r:1, a:1, i:1, n:1}
  

// №--3

// function truncate(str, n) {
//     return str.slice(0, n);
//   }
  
//   console.log(truncate("webbrain academy", 5));  


// №--4

// function getCurrency(str) {
//     return Number(str.replace(/\D/g, ""));
//   }
  
//   console.log(getCurrency("$1200"));


// №--5

function analyzeString(str) {
    let result = { letter: 0, char: 0, numbers: 0 };
    for (let ch of str) {
      if (/[a-zA-Z]/.test(ch)) result.letter++;
      else if (/[0-9]/.test(ch)) result.numbers++;
      else result.char++;
    }
    return result;
  }
  
  console.log(analyzeString("webbr@!n_2022"));
  // { letter: 6, char: 3, numbers: 4 }
  
  