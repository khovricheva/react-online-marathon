// The user enters as arguments the number of seconds, minutes, hours, days, weeks, months, years.
// Output how many seconds are in all this.
// All parameters are optional. Consider 30 days in a month
const howMuchSec = (...parameters) => {
  const [
    seconds = 0,
    minutes = 0,
    hours = 0,
    days = 0,
    weeks = 0,
    months = 0,
    years = 0,
  ] = parameters;

  const sumOfSec =
    seconds +
    minutes * 60 +
    hours * 3600 +
    days * 86400 +
    weeks * 604800 +
    months * 2592000 +
    years * 31536000;

  return sumOfSec;
};
// Example:
// howMuchSec(12, 3); //192
// howMuchSec(1, 33, 22); //81181
