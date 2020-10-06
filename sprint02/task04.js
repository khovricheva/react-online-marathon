// Find the maximum interval between two consecutive numbers. Numbers are entered as arguments
const maxInterv = (...numbers) => {
  if (numbers.length === 1) return 0;
  const newArr = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    newArr.push(Math.abs(numbers[i] - numbers[i + 1]));
  }
  return Math.max(...newArr);
};

// Example:
// maxInterv(3, 5, 2, 7); //5
// maxInterv(3, 5, 2, 7, 11, 0, -2); //11
