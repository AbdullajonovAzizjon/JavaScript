part---1

№--1

function check(str1, str2){
    for(let value of str2){
        if(!str1.includes(value)) return false;
    }
    return true;
}

console.log(check("webbrain academy", "acsa"));
console.log(check("webbrain academy", "webbrain"));

  №--2

function getCount(str) {
    let result = {};
    for (let value of str) {
      if (value === " ") continue;
      result[value] = (result[value] || 0) + 1;
    }
    return result;
  }
  
  console.log(getCount("webbrain")); 
  

№--3

function truncate(str, x) {
    return str.slice(0, x);
  }
  
  console.log(truncate("webbrain academy", 5));  


 