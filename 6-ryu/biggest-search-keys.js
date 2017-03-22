function permuteAPalindrome (input) {
  var pers=[];
  var str=input.split('');
  for(var i=0;i<str.length;i++)
    for(var j=i+1;j<str.length;j++) {
      pers.push(input.slice(i)+input.slice(0,i));
    }
  console.log(pers);
  return pers.some(a=>isPalindrome(a));
  function isPalindrome(s) {
    return s.split('').reverse().join('')==s;
  }
}
console.log(permuteAPalindrome('madam'));