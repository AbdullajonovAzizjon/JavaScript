// №---1
// let a = [1, 2, 3, 4, 5]; 

// let b = a.filter(function(item){
//     console.log(item);
// });
// console.log(b % 2);


// if (!(b % 2)){
//     console.log(b % 2);   
// } else console.log(a);

// ----------------------------------------------------------------------

// №---2

// let arr1 = [7, 1];
// let arrA = arr1.forEach(function(value){
//     console.log(value);
// });

// if (arrA % 2 !==0){
//     console.log(arr1.sort((a, b) => a - b));
// } else console.log(arr1);


// let arr2 = [5, 8, 6, 3, 4];

// let arrB = arr2.forEach(function(value){
//     console.log(value);
// });

// if(arrB  % 2 !==0){
//     console.log(arr2.sort((a, b) => a - b));
// } else console.log(arr2);

// let arr3 = [9, 8, 7, 6, 5, 4];

// let arrC = arr3.forEach(function(value){
//     console.log(value);
// })

// if(arrC % 2 !==0){
//     console.log(arr3.sort((a, b) => a - b));
// } else console.log(arr3);

// ------------------------------------------------------------------------

// №---3

// -------------------------------------------------------------

// №---4

function findUniqueElements(arr) {
    return arr.filter((item, _, array) => array.indexOf(item) === array.lastIndexOf(item));
  }
  
  // Test qilish
  console.log(findUniqueElements([1, 1, 2, 3, 4, 4, 5, 6, 6]));      // [2, 3, 5]
  console.log(findUniqueElements([55, 55, 32, 110, 110, 99, 99]));   // [32]
  