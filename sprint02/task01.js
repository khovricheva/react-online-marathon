// The function filterByN receives an array of integers, a number and a parameter (greater, less). Print a new array, where all elements will be greater/less than this number
// By default, the number is 0, the parameter is greater.
function filterNums(array, number = 0, parameter = 'greater') {
  const newArr = [];
  if (parameter === 'greater') {
    array.map((elem) => {
      if (elem > number) newArr.push(elem);
    });
  } else if (parameter === 'less') {
    array.map((elem) => {
      if (elem < number) newArr.push(elem);
    });
  }
  return newArr;
}

// Example:
// filterNums([-1, 2, 4, 0, 55, -12, 3], 11, 'greater');  //[ 55]
// filterNums([-2, 2, 3, 0, 43, -13, 6], 6, 'less'); // [-2, 2, 3, 0, -13]
