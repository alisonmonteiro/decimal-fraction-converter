'use strict';

var writtenMode = require('frac-por-extenso')
  , dfConverter = {};


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


dfConverter.convert = function (number, simplify) {
  if (number > 1) {
    throw new Error('The number must be an fraction');
  }

  this.numerator = this.getNumerator(number);
  this.denominator = this.getDenominator(this.countDecimals(number));

  if (simplify === true) {
    return this.simplify();
  }

  return this;
};


dfConverter.written = function (f) {
  var fraction = f || this;
  return writtenMode(fraction.numerator, fraction.denominator)
};


dfConverter.isPrimeNumber = function (number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return number > 1;
};


dfConverter.getSmaller = function (denominator, numerator) {
  return Math.min(denominator, numerator);
};


dfConverter.simplify = function (f) {
  var fraction = f || this
    , smaller = this.getSmaller(fraction.numerator, fraction.denominator);

  if ((this.isPrimeNumber(fraction.numerator) && this.isPrimeNumber(fraction.denominator))
    || fraction.numerator === 1 || fraction.denominator === 1) {
    return fraction;
  }

  for (smaller; smaller >= 0; smaller--) {
    if (fraction.numerator % smaller === 0 && fraction.denominator % smaller === 0) {
      fraction.numerator = fraction.numerator / smaller;
      fraction.denominator = fraction.denominator / smaller;

      setTimeout(function () {
        dfConverter.simplify({
          numerator: fraction.numerator
          , denominator: fraction.denominator
        });
      }, 1);

    }

    if (smaller == 0) {
      this.numerator = fraction.numerator;
      this.denominator = fraction.denominator;

      return this;
    }
  }
};


module.exports = dfConverter;