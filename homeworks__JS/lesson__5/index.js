// part-1 !!!!!!

// let age = 18 ;
// let who = `studen`;


// let chipta = (age < 18 || who===`student`, prompt(`yoshingizni kiriting`)) ? "Chipta narxi 5000 so'm" : "Chipta narxi 10000 so'm";
// console.log(chipta);



// if(age < 18 || who===`student`){
//     console.log(`chipta narxi 5000 so'm`);
// } else{
//     console.log(`chipta narxi 10000 so'm`);
// }

let age = prompt("Siz 18 yoshdan kichikmisiz? (ha/yo'q)");
let talaba = prompt("Siz talabamisiz? (ha/yo'q)");


    if (age === "ha" || talaba === "ha") {
        console.log("chipta narxi 5000 so'm");

    } else {
        console.log("chipta narxi 10000so'm.");
      }
    if(age === "ha" || talaba === "yo'q"){
      console.log("chipta narxi 5000 so'm");
    } else{
      console.log("chipta narxi 10000so'm.");
    }
    if(age === "yo'q" || talaba === "ha"){
      console.log("chipta narxi 5000 so'm");
    } else{
        console.log("chipta narxi 10000so'm.");
    }
    
  
  
 