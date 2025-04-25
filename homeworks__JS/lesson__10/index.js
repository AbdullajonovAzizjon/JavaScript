// part--1

// let user =  {
//     id : 1,
//     name: "Eshmat",
//     age: 65,
//     status: "Nafaqa oluvchi",
//     child:{
//         id: 2,
//         name: "Toshmat",
//         age:30,
//         status: "Talaba"
//     } 
// }

// let cloneUser = structuredClone(user);
// cloneUser.child.age = 45;

// console.log(user);
// console.log(cloneUser);


// part--2

// let user =  {
//         id : 1,
//         name: "Eshmat",
//         age: 65,
//         status: "Nafaqa oluvchi",
//         child:{
//             id: 2,
//             name: "Toshmat",
//             age:30,
//             status: "Talaba"
//         } 
//     }

// let cloneUser = {};


// for (key in user){
//     if(typeof user[key] === "object"){
//         cloneUser[key] = {};
//         for (innerkey in user[key]){
//             cloneUser[key][innerkey] = user[key][innerkey]; 
//         }
//     }   else{
//         cloneUser[key] = user[key]
//     }
// }
// cloneUser.child.age = 45;

// console.log(user);
// console.log(cloneUser);

// part--3

let user =  {
    id : 1,
    name: "Eshmat",
    age: 65,
    status: "Nafaqa oluvchi",
    child:{
        id: 2,
        name: "Toshmat",
        age:30,
        status: "Talaba",
        func() {
            return this.age
        }
    } 
}

