function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
        return false;
    }

    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            // If the number is divisible, it is not prime
            return false;
        }
    }

    // If no divisors are found, the number is prime
    return true;
}

// Example usage:
const num = 17;
if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
} else {
    console.log(`${num} is not a prime number.`);
}
