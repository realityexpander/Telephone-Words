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

  let res = [];
  let tmp;

  for(let i of digitString) {
    tmp = '';
    for(let j of keys[i]) {
      tmp += keys[i]
      res.push(tmp)
      tmp = tmp.slice(0,tmp.length-1)
    }
  }

  return res;
}

console.log(telephoneWords('0123'));
