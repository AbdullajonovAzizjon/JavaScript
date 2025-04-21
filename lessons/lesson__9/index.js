let year = prompt(`Yoshingiz nechida`);
let age = 2025 - year


let user ={
    id : 1,
    age,
}

if(user.age <= 6){
    user.kim = `bogchada`
} else if (user.age >= 7 && user.age <= 18){
    user.kim = `maktabda`
} else {
    user.kim = `universitetda`
}

console.log(user);
