function telephoneWords (digitString) {
  let keys = { 
      0: '0',
      1: '1',
      2: 'ABC',
      3: 'DEF',
      4: 'GHI',
      5: 'JKL',
      6: 'MNO',
      7: 'PQRS',
      8: 'TUV',
      9: 'WXYZ'
  };

  var res = [];
  function makeLettersFromDigits (word, digits) {
    if (digits.length === 0) {
      return res.push(word);
    }
    
    keys[digits[0]].split('')
      .forEach(function(letter) {
        makeLettersFromDigits(word + letter, digits.slice(1));
      });
  };

  makeLettersFromDigits('', digitString.split(''));

  return res;

}

console.log(telephoneWords('0123'));
