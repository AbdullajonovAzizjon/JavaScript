// part---1

// let user = {
//     id: 1,
//     firstName: "Eshmat",
//     surName: "Toshmatov",
//     age: 30,
//     getFullname: () => {
//         return `${this.firstName} ${this.surName}`
//     },
// };

// console.log(user.getFullname());
//natija undefined undefined
// natija: arrow function parentga emas globalga qaraydi shuning uchun u yerda firstName bilan surName yoq shuning uchun undefined undefined chiqadi.


// part---2

let ladder = {
    step: 10,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this
    },
    showStep() {
        console.log(this.step);
        return this
    },
};

ladder.up().up().down().showStep().down().showStep();

// natija: 11 10
// chunki bunda this metodi qayta qayta yangilangani sababli, malumotlar ham yangilanyapti shunig uchun faqat 1 qoshilyapti va ayrilyapti 
// ladder.up().up().down().showStep() mana shu yergacha 1 qoshilyapti va 
//down().showStep(); va bu yerdan 1 ayrilyapti this metodi har safar yangilanyapti