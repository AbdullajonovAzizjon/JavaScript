 // №--5

// function analyzeString(str) {
//     let result = { letter: 0, char: 0, numbers: 0 };
//     for (let ch of str) {
//       if (/[a-zA-Z]/.test(ch)) result.letter++;
//       else if (/[0-9]/.test(ch)) result.numbers++;
//       else result.char++;
//     }
//     return result;
//   }
  
//   console.log(analyzeString("webbr@!n_2022"));
  

// №--6

function capitilize(str) {
    return str
      .split(" ")
      .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }
  
  console.log(capitilize("webbrain academy"));  
