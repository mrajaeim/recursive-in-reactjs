// Recursive function to calculate factorial
function factorial(n) {
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: multiply n by factorial of (n-1)
  else {
    return n * factorial(n - 1);
  }
}

export default factorial;
