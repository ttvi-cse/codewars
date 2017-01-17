longestPalindrome = function(s, i, j){
  //your code here
  console.log('longestPalindrome('+s, + ' ' + i + ' '+ j +')');
  if (i == j) {
  	// console.log('Base Case 1: ' + s);
  	return 1;
  }
  	

  if (s.charAt(i) == s.charAt(j) && j == i + 1) {
  	// console.log('Base Case 2: ' + s);
  	return 2;
  }

  if (s.charAt(i) === s.charAt(j)) {
  	return longestPalindrome(s, i+1, j-1) + 2;
  }
  	
  return Math.max(longestPalindrome(s, i, j-1), longestPalindrome(s, i+1, j));

}

console.log(longestPalindrome('zzbaabcd', 0, 'zzbaabcd'.length));