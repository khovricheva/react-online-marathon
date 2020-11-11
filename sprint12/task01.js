// Using the default parameter technique, overload the overloadedFunc() function, which takes 3 arguments. For the 1st argument of the function set the default value [1, 2, 3], for the 2nd - the value 2, for the 3rd - the function that returns the product of the first two arguments, and the function can multiply both arrays and numbers.
// The overloadedFunc() function returns the result of the default function.

function overloadedFunc(arr, num, func) {
  arr = arr || [1, 2, 3];
  num = num || 2;
  func =
    func ||
    ((x, y) => {
      if (Array.isArray(x)) return arr.map((el) => el * y);
      return x * y;
    });
  return func(arr, num);
}
