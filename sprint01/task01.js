function modifyArray(array) {
  array.splice(0, 1, 'Start');
  array.splice(array.length - 1, 1, 'End');
  return array;
}
// Function example:
modifyArray([12, 6, 22, 0, -8]); // [‘Start’, 6, 22, 0, ‘End’]
