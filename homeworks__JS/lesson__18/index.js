// №---1
// let students = [
//     {id: 1, name:"Sardor", age: 27},
//     {id: 2, name:"Ismoil", age: 17},
//     {id: 3, name:"Ozod", age: 21},
// ];
  
// const person = students.find(s => s.name === "Sardor");
// console.log(person);

// const aboutage = [...students].sort((a, b) => a.age - b.age);
// console.log(aboutage);

// const byName = [...students].sort((a, b) => a.name.localeCompare(b.name));
// console.log(byName);

// const byId = [...students].sort((a, b) => a.id - b.id);
// console.log(byId);

// ----------------------------------------------------------------------------

// №---2

let arr1 = [1, 3, 5];
let arr2= [2, 4, 6];

let mixed = arr1.concat(arr2);
console.log(mixed);

let b = mixed.sort((arr1, arr2) => arr1 - arr2);
console.log(b);

let odd = mixed.filter(num => num % 2)
console.log(odd);
let even = mixed.filter(num => !(num % 2))
console.log(even);

let summ = even.reduce((acc, num) => acc + num, 0);
console.log(summ);

let middle = summ / 2;
console.log(middle);
