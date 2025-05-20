// №---1
let students = [
    {id: 1, name:"Sardor", age: 27},
    {id: 2, name:"Ismoil", age: 17},
    {id: 3, name:"Ozod", age: 21},
];
  
const person = students.find(s => s.name === "Sardor");
console.log(person);

const aboutage = [...students].sort((a, b) => a.age - b.age);
console.log(aboutage);

const byName = [...students].sort((a, b) => a.name.localeCompare(b.name));
console.log(byName);

const byId = [...students].sort((a, b) => a.id - b.id);
console.log(byId);

// ----------------------------------------------------------------------------

// №---2


