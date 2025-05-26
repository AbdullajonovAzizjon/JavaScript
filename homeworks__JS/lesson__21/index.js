let str = "oxxfooddd";
let count = {};

for (let i = 0; i < str.length; i++) {
  let harf = str[i];
  if (count[harf]) {
    count[harf]++;
  } else {
    count[harf] = 1;
  }
}

for (let harf in count) {
  console.log(harf + " : " + count[harf] + " marta");
}
