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

    if (age === null) {
      alert("Siz hech narsa kiritmadingiz.");
    } else {
        let natija = (age === "ha") ? "chipta narxi 5000 so'm" : "chipta narxi 10000so'm.";
        alert(natija);
      }
  
      let javob = prompt("Siz talabamisiz? (ha/yo'q)");
  
      if (javob === null) {
        alert("Siz hech narsa kiritmadingiz.");
      } else {
        javob = javob.toLowerCase(); // harflarni kichik qiladi
        let natija = (javob === "ha") ? "chipta narxi 5000 so'm" : "chipta narxi 10000so'm.";
        alert(natija);
      }