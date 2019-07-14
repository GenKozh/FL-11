function reverseNumber(a) {
  let varReversed = '';
  let varString = a.toString();
  let result;
  for (let i = 0; i < varString.length; i++) {
    varReversed += varString[varString.length - 1 - i];
  }
  result = parseInt(varReversed);
  if (a < 0) {
    result *= -1;
  }
  return result;
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000); 
