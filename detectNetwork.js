// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var cardPrefix = cardNumber.slice(0, 2);
  var cardLength = cardNumber.length;
  if ((cardPrefix === '38' || cardPrefix === '39') && cardLength === 14) {
    return 'Diner\'s Club';
  } else if ((cardPrefix === '34' || cardPrefix === '37') && cardLength === 15) {
    return 'American Express';
  } else if ((cardPrefix === '51' || cardPrefix === '52' || cardPrefix === '52'
  || cardPrefix === '53' || cardPrefix === '54' || cardPrefix === '55') && cardLength === 16) {
    return 'MasterCard';
  } else if ((cardNumber.slice(0, 4) === '4903'
  || cardNumber.slice(0, 4) === '4905'
  || cardNumber.slice(0, 4) === '4911'
  || cardNumber.slice(0, 4) === '4936'
  || cardNumber.slice(0, 6) === '564182'
  || cardNumber.slice(0, 6) === '633110'
  || cardNumber.slice(0, 4) === '6333'
  || cardNumber.slice(0, 4) === '6759')
  && (cardLength === 16 || cardLength === 18 || cardLength === 19)) {
    return 'Switch';
  } else if (cardNumber.slice(0, 1) === '4' &&
  (cardLength === 13 || cardLength === 16 || cardLength === 19)) {
    return 'Visa';
  } else if ((cardNumber.slice(0, 4) === '6011' || cardNumber.slice(0, 3) === '644'
  || cardNumber.slice(0, 3) === '645' || cardNumber.slice(0, 3) === '646'
  || cardNumber.slice(0, 3) === '647' || cardNumber.slice(0, 3) === '648'
  || cardNumber.slice(0, 3) === '649' || cardNumber.slice(0, 2) === '65') &&
  (cardLength === 16 || cardLength === 19)) {
    return 'Discover';
  } else if ((cardNumber.slice(0, 4) === '5018' || cardNumber.slice(0, 4) === '5020'
  || cardNumber.slice(0, 4) === '5038' || cardNumber.slice(0, 4) === '6304') &&
  (cardLength >= 12 && cardLength <= 19)) {
    return 'Maestro';
  } else if ((parseInt(cardNumber.slice(0, 6)) >= 622126
  && parseInt(cardNumber.slice(0, 6)) <= 622925)
  || (parseInt(cardNumber.slice(0, 3)) >= 624 && parseInt(cardNumber.slice(0, 3)) <= 626)
  || (parseInt(cardNumber.slice(0, 4)) >= 6282 && parseInt(cardNumber.slice(0, 4)) <= 6288)
  && (cardLength >= 16 && cardLength <= 19)) {
    return 'China UnionPay';
  }
};