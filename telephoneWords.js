function telephoneWords (digitString) {
  let keys = [ ['0'],['1'], ['2','a','b','c'], ['3','d','e','f'], 
               ['4','g','h','i'], ['5','j','k','l'], ['6','m', 'n', 'o'],
               ['7','p', 'q', 'r', 's'], ['8','t', 'u', 'v'], 
               ['9','w', 'x', 'y', 'z']];
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
