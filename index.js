'use strict';

var fracPorExtenso = require('frac-por-extenso')
  , dfConverter = {};

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
  if (number.toString().split(".").length > 1) {
    return parseInt(number.toString().split(".")[1], 10);
  }

  return 1;
};


dfConverter.getSmaller = function (denominator, numerator) {
  return Math.min(denominator, numerator);
};


dfConverter.convert = function (number) {
  if (number > 1) {
    throw new Error('The number must be an fraction');
  }

  this.numerator = this.getNumerator(number);
  this.denominator = this.getDenominator(this.countDecimals(number));

  return this;
};


dfConverter.written = function (f) {
  var fraction = f || this;
  return fracPorExtenso(fraction.numerator, fraction.denominator)
};


module.exports = dfConverter;