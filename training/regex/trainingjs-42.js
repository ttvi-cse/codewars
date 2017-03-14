//Use (?:) to define a sub expression that is not used for the backreference
var str="aab abb aba"
var re1=/\b(a)(\w)\1\b/g
var re2=/\b(?:a)(\w)\1\b/g
console.log( str.match(re1) )  //output: [ 'aba' ]
console.log( str.match(re2) )  //output: [ 'abb' ]

var str="dogs cats sheeps car bar star"
var re1=/\b\w+(?:s|ar)\b/g
var re2=/\b\w+(?:s|ar)\b/
var re3=/\b\w+(s|ar)\b/
console.log( str.match(re1) )
//output: [ 'dogs', 'cats', 'sheeps', 'car', 'bar', 'star' ]
console.log( str.match(re2) )
//output: [ 'dogs', index: 0, input: 'dogs cats sheeps car bar star' ]
console.log( str.match(re3) )
//output: [ 'dogs', 's', index: 0, input: 'dogs cats sheeps car bar star' ]