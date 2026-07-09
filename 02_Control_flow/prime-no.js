let n = 4;
let isTrue = true;

if (n <= 1) {
    isTrue = false;
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isTrue = false;
            break;
        }
    }
}

if (isTrue) {
    console.log("Prime number");
} else {
    console.log("Not a prime number");
}