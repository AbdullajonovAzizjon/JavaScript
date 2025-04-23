let parent = {
    id: 1,
    name: "Toshmat",
    age: 60,
    child:{
        id:2,
        name: "gulmat",
        age:30,
    }
}

let newobj = structuredClone(parent)
newobj.child.age=40

console.log(parent);
console.log(newobj);
