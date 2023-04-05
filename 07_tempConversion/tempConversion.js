const convertToCelsius = function(fahrenheit_temperature) {
  return Math.round(((fahrenheit_temperature - 32) * 5 / 9) * 10) / 10
};

const convertToFahrenheit = function(celsius_temperature) {
  return Math.round((celsius_temperature * 9 / 5 + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
