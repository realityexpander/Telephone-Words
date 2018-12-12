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
    
    let x = keys[digits[0]].split('');
    for(let i of x) {
      makeLettersFromDigits(word + i, digits.slice(1));
    }
  };

  makeLettersFromDigits('', digitString.split(''));

  return res;

}

console.log(telephoneWords('0123'));

//               _.===========================._
//             .'`  .-  - __- - - -- --__--- -.  `'.
//         __ / ,'`     _|--|_________|--|_     `'. \
//       /'--| ;    _.'\ |  '         '  | /'._    ; |
//     //   | |_.-' .-'.'      ___      '.'-. '-._| |
//     (\)   \"` _.-` /     .-'`_ `'-.     \ `-._ `"/
//     (\)    `-'    |    .' .-'" "'-. '.    |    `-`
//   (\)            |   / .'(3)(2)(1)'. \   |
//   (\)            |  / / (4) .-.     \ \  |
//   (\)            |  | |(5) (   )'==,J |  |
//   (\)             |  \ \ (6) '-' (0) / /  |
// (\)              |   \ '.(7)(8)(9).' /   |
// (\)           ___|    '. '-.._..-' .'    |
// (\)          /.--|      '-._____.-'      |
//   (\)        (\)  |\_  _  __   _   __  __/|
// (\)        (\)   |                       |
// (\)_._._.__(\)    |                       |
// (\\\\\\\\\\)      '.___________________.'
//   '-'-'-'--'
