let num = 4;

let fib = [0, 1];

while (fib[fib.length - 1] < num) {
    let nextNum = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(nextNum); 
}

if (fib.includes(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
}
