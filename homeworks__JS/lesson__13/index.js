// // part---1
// let num=5;
// let a=num.toString(2);
// console.log(a.match(/1/g).length, a.match(/0/g)?.length || 0);

// // part---2
// let a=[5, 2, 9, 1];
// console.log(Math.max(...a)-Math.min(...a));

// // part---3
// let example=-4.7;
// console.log(Math.trunc(example), Math.floor(example), Math.ceil(example), parseInt(example));


// part---4
let number=(min,max) => Math.floor(Math.random()*(max-min+1))+min;
console.log(number(1,50));