function checkAdult(age) {
  try {
    if (arguments.length === 0) {
      throw new Error('Please, enter your age');
    } else if (age < 0) {
      throw new Error('Please, enter positive number');
    } else if (typeof age !== 'number') {
      throw new Error('Please, enter number');
    } else if ((age ^ 0) !== age) {
      throw new Error('Please, enter Integer number');
    } else if (age < 18) {
      throw new Error('Access denied - you are too young!');
    }
    console.log('Access allowed');
  } catch (error) {
    console.log(error.name, error.message);
  } finally {
    console.log('Age verification complete');
  }
}

//Function usage example:
checkAdult(15); // Error Access denied - you are too young! // Age verification complete
checkAdult(25); // Access allowed // Age verification complete
