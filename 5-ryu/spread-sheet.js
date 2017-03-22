//TODO-20/3/2017 fix this shit for me plzzzzzzz
function spreadsheet(s) {
  //coding and coding..
  var token=s.match(/([a-z]+)(\d+)/i);
  return 'R'+foo(token[1])+'C'+token[2];
  function foo(s) {
    return s.split('').reduce((a,b,c)=>{
      var c_point=b.codePointAt(0)-'A'.codePointAt(0);
      a+=(c_point*Math.pow(26,c));
      return a;
    },0)+1;
  }
}
console.log(spreadsheet('D5'));