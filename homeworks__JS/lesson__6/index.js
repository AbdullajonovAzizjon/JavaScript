let n = 10000;

for (let i = 2; i <= n; i++) {
    let tub = true;
    for (let j = 2; j < i; j++) {
        tub = (i % j === 0) ? false : tub;
    }
    tub ? console.log(i) : null;
}
