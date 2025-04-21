// part-1

// function k(x1,x2){return Math.min(x1, x2);}
// let y=80;
// let z=50;
// let m=k(y,z);
// console.log(m);

// part-2

// function degree(a,b){return Math.pow(a,b);}
// let c=20;
// let d=20;
// console.log(degree(c,d));

// part-3

const prompt = (savol, ha, yoq) => confirm(savol) ? ha() : yoq();
prompt(
  "Rozimisiz?",
  () => alert("Siz rozi bo'ldingiz."),
  () => alert("Siz rozi bo'lmadingiz")
);