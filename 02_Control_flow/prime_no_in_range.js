let start = 1;
let end = 20;

for (let num = start; num <= end; num++) {

    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}