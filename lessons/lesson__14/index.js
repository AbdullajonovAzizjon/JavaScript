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



