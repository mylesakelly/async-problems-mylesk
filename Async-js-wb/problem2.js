function divide(number) {
    if (number % 10 === 0) {
      return true;
    } else {
      return false;
    }
  }
//   modulus operator was used to check if the number is divisible by 10

console.log(divide(20)); // Output: true
console.log(divide(15)); // Output: false

// example of how to use function above; use divide variable and enter number into console.log to use the function