// №--1
// let fruits = ["Apples", "Pear", "Orange"];

// let shoppingcart = fruits;
// shoppingcart.push("Banana");

// console.log(fruits.length); 

// natija: 4 chunki shoppingcart = fruits deganda u fruitsga teng boladi va shoppingcartda ozgartirilgan ma'lumot  fruitsda ham o'zgaradi.


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------


// №--2
// let styles = ["Jazz", "Blues"];

// let a = styles;
// a.push("Rock-n-Roll")

// console.log(a);



// let b = a;
// b.splice(1, 1, "Classics")
// console.log(b);

//  a.shift(0)
// console.log(a);



// b.unshift("Rap", "Reggage");
// console.log(b);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------


// №---3
// let arr = ["a", "b"];

// arr.push(function(){
//     alert( this );
// });
// arr[2]();
// natija: funksiya chiqadi chunki alert( this ); hech nima biriktirmasak u ozini orab turuvchisiga teng boladi. Uni orab turuvchi function. shuning uchun functionga teng. arr.push(function() bu esa arreyga 3 element qoshyapti. oshanda functionning indexi 2ga teng boladi va function chiqadi



// ---------------------------------------------------------------------------------------------------------------------------------------------------------------



// №---4
let prompt = prompt("Son kiriting");


function sumInput() {
    let num = [];

    while(true){

        if(prompt === "" || prompt === null) break;
        if(prompt === 0) continue;
        if(!(prompt === Number)) break;

        let number = Number(prompt);

        All.push(number);
    }

    let summ = 0;

    for (let num of numbers){
        summ += num
    }

    return summ
}

let summed__up = sumInput();
alert(summed__up);


