'use strict';

var dfConverter = {};

dfConverter.checkIsPrimeNumber = function (number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
};


dfConverter.countDecimals = function (number) {
  if (Math.floor(number.valueOf()) === number.valueOf()) {
    return 0;
  }

  return number.toString().split(".")[1].length || 0;
};


dfConverter.getDenominator = function (decimals) {
  return Math.pow(10, decimals);
};


dfConverter.getNumerator = function (number) {
  return parseInt(number.toString().split(".")[1], 10);
};


dfConverter.getSmaller = function (number) {

}


dfConverter.convert = function (number) {
  if (number > 1) {
    throw new Error('The number must be an fraction');
  }

  var denominator = this.getDenominator(this.countDecimals(number));
  var numerator = this.getNumerator(number);

  console.log(numerator);

};

module.exports = dfConverter;