String.prototype.toInteger=function(){
  var s,x;
  if(s=/(^[+-]?)(0b[01]+$)/.exec(this)) {
    x=Number(s[2]);
    return s[1]!='-'?x:-x;
  } else if(s=/(^[+-]?)(0o[0-7]+$)/.exec(this)) {
    x=Number(s[2]);
    return s[1]!='-'?x:-x;
  } else if(s=/(^[+-]?)(0x[0-9a-fA-F]+$)/.exec(this)) {
    x=Number(s[2]);
    return s[1]!='-'?x:-x;
  } else if(s=/(^[+-]?)([0-9]+$)/.exec(this)) {
    x=Number(s[2]);
    return s[1]!='-'?x:-x;
  }
  return null;
}
console.log('-0b1010'.toInteger())