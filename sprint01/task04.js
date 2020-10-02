function factorial(n) {
  if (n !== 1 && n !== 0) return factorial(n - 1) * n;
  return 1;
}

function processArray(arr, factorial) {
  let result = [];
  arr.map((elem) => result.push(factorial(elem)));
  return result;
}

// Example
processArray([1, 2, 3, 4, 5], factorial); // [1, 2, 6, 24, 120]
