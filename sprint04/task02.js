// Write an add(x, y) function that takes two arguments x and y. The function should return a Promise that resolves with the sum of the two arguments if they are Numbers, or rejects with the message "Error!" otherwise

function add(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x === 'number' && typeof y === 'number') {
      resolve(x + y);
    }
    reject('Error!');
  });
}
