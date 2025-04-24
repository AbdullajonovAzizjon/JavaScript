let user =  {
    id : 1,
    name: "Eshmat",
    age: 65,
    status: "Nafaqa oluvchi",
    child:{
        id: 2,
        name: "Toshmat",
        age:30,
        status: "Talaba"
    } 
}

let cloneUser = {};

for (key in user) {
    child[key] = user[key]
}

console.log(child);
