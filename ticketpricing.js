function ticketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Get user input
let age = prompt("Enter your age: ");
age = parseInt(age);
let price = ticketPrice(age);
console.log(`The price of the movie ticket is $${price}.`);
