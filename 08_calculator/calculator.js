const add = function(num1, num2) {
	const sum = num1 + num2;
  return sum;
};

const subtract = function(num1, num2) {
	const result = num1 - num2;
  return result;
};

const sum = function(array) {
  const numbers = array;
  let sum = 0;
  for (i=0; i<numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
};

const multiply = function(array) {
  const numbers = array;
  let result = 1;
  for (i=0; i<numbers.length; i++){
    result *= numbers[i];
  }
  return result;
};

const power = function(num,exponent) {
	let result = 1;
  for (i=0; i<exponent; i++){
    result *= num;
  }
  return result;
};

const factorial = function(num) {
  if (num === 0) return 1;
  return num*factorial(num-1);
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
