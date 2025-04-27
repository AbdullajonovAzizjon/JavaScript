part--1

№--1
let obj={
    id:1,
    name:"WebBrain"
}

for(key in obj);
console.log(key);

№--2

let obj = {
    id: 1,
    name: "WebBrain"
};

for ( key in obj) {
  if (typeof obj[key] === "number") {
    console.log( obj[key]);
  }
}


№--3

let obj={
    id:1,
    name:"WebBrain",
    offline:true,
    online:true,
    individual:false
}

for (key in obj) {
  if (typeof obj[key] === "boolean") {
    console.log(key + ":" + obj[key]);
  }
}


№--4

let obj={
    id:1,
    name:"WebBrain",
    offline:true,
    online:true,
    individual:false
}

for (key in obj) {
    if(typeof obj[key] === "string"){
        console.log(key+ ":" + obj[key]
        );
    }
}


№--5

let obj={
  id:1,
  name:"atirgul",
  color:"qizil",
  count:10,
  price:"10$"
}

for(key in obj){
    if(typeof obj[key] === "string"){
        console.log(obj[key]);
    }
}



