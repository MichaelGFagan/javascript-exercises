const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(numbers) {
	return numbers.reduce((partialSum, number) => partialSum + number, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((partialProduct, number) => partialProduct * number, 1)
};

const power = function(number, exponent) {
	let exponent_abs = Math.abs(exponent)
  let returnNumber = 1
  for (i = 0; i < exponent_abs; i++) {
    returnNumber *= number
  }
  if (exponent === 0) {
    return 1
  }
  else if (exponent < 0) {
    return 1 / returnNumber
  }
  else {
    return returnNumber
  }
};

const factorial = function(number) {
	if (number === 0) {
    return 1
  }
  else {
    let returnNumber = 1
    for (i = 0; i < number; i++) {
      returnNumber *= (number - i)
    }
    return returnNumber
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
