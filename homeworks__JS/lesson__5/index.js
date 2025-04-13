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

// let age = 14;
// let talaba = "ha";


//     if (age < Number(18) && talaba === "ha") {
//         console.log("chipta narxi 5000 so'm");

//     } else {
//         console.log("chipta narxi 10000so'm.");
//       }
//     if(age < Number(18) && talaba === "yo'q"){
//       console.log("chipta narxi 5000 so'm");
//     } else{
//       console.log("chipta narxi 10000so'm.");
//     }
//     if(age > Number(18) && talaba === "ha"){
//       console.log("chipta narxi 5000 so'm");
//     } else{
//         console.log("chipta narxi 10000so'm.");
//     }

let age = Number(prompt("Yoshingizni kiriting:"));
let talaba = prompt("Talabamisiz? (ha/yo'q)");

if (age < 18 && talaba === "ha") {
    console.log("chipta narxi 5000 so'm");
} else if (age < 18 && talaba === "yo'q") {
    console.log("chipta narxi 5000 so'm");
} else if (age > 18 && talaba === "ha") {
    console.log("chipta narxi 5000 so'm");
} else {
    console.log("chipta narxi 10000 so'm");
}

    
  
 