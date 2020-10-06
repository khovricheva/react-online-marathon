// The function takes any number of strings and returns the sum of their lengths.
const sumOfLen = (...strings) => {
  if (strings === 0) return 0;
  const sum = strings.reduce(
    (total, currentStr) => (total += currentStr.length),
    0
  );
  return sum;
};

// Example:
// console.log(sumOfLen('hello', 'hi')); //7
// console.log(sumOfLen('hi')); //2
