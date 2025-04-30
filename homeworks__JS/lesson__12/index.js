// part---1

let user = {
    id: 1,
    firstName: "Eshmat",
    surName: "Toshmatov",
    age: 30,
    getFullname: () => {
        return `${this.firstName} ${this.surName}`
    },
};

console.log(user.getFullname());
//natija undefined undefined
// natija: arrow function parentga emas globalga qaraydi shuning uchun u yerda firstName bilan surName yoq shuning uchun undefined undefined chiqadi.. 


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