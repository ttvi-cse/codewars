function validParentheses(parens){
  //TODO 
  
  var indent = 0;

  for (var i = 0; i < parens.length; i++) {
    indent += parens[i] === '(' ? 1 : -1;
  }

  return indent == 0;
}

console.log(validParentheses(''));