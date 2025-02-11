function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both parameters must be numbers.');
  }
  return a + b;
}

let result = add(10, 5); // Correct usage
console.log(result); // Output: 15

try {
  let result2 = add("hello", 5); // Throws an error
  console.log(result2);
} catch (error) {
  console.error(error.message); // Output: Invalid input: Both parameters must be numbers.
}
