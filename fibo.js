function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Test the function
let n = prompt("Enter the position of the Fibonacci sequence: ");
n = parseInt(n);
console.log(`The ${n}th Fibonacci number is ${fibonacci(n)}.`);
