function combineArray(arr1, arr2) {
  let newArr = [];
  let concatArr = arr1.concat(arr2);
  concatArr.map((elem) => {
    if (typeof elem === 'number' && !isNaN(elem)) newArr.push(elem);
  });
  return newArr;
}

//Function example:
combineArray([12, 'User01', 22, true, -8], ['Index', 6, null, 15]); // [12, 22, -8, 6, 15]
