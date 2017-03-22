function validParentheses(parens){
  while(/\(\)/.test(parens)) {
    parens=parens.replace(/\(\)/,'');
  }
  return parens.length==0;
}

console.log(validParentheses(''));