class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  multiply(fraction)
  const numerator = this.numerator*fraction.numerator;
  const denominator = this.denominator*fraction.denominator;
  return new Fraction(numerator,denominator);
 }

 or
 
 function multiplyFractions(f1, f2) {
  var numerator = f1[0] * f2[0];
  var denominator = f1[1] * f2[1];
  return [numerator, denominator];
}

var result = multiplyFractions([1, 2], [3, 4]);
console.log(result);
