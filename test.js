var fn = require('./');
var test = require('ava');

test('simplifying a fraction', function (t) {
  var f = {
    numerator: 10
    , denominator: 20
  };

  t.is(fn.simplify(f).numerator, 1);
  t.is(fn.simplify(f).denominator, 2);

  t.is(fn.convert(0.5, true).numerator, 1);
  t.is(fn.convert(0.5, true).denominator, 2);
});


test('convert a number to a fraction', function (t) {
  var fraction = fn.convert(0.5);

  t.is(fraction.numerator, 5);
  t.is(fraction.denominator, 10);

  t.is(fraction.simplify().numerator, 1);
  t.is(fraction.simplify().denominator, 2);
});


test('written mode from a number', function (t) {
  t.is(fn.convert(0.5).written(), 'cinco décimos');
  t.is(fn.convert(0.5).simplify().written(), 'um meio');
  t.is(fn.convert(0.003).written(), 'três milésimos');
  t.is(fn.convert(0.004).simplify().written(), 'um duzentos e cinquenta avos');
});


test('written mode from a fraction', function (t) {
  var f = {
    numerator: 10
    , denominator: 20
  };

  t.is(fn.written(f), 'dez vinte avos');
  t.is(fn.simplify(f).written(), 'um meio');
});