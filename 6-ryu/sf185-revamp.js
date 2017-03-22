/*
- rearrange alphabet
- rearrange sum of ascii
- same ascii value, rearrange by length
- still equal rearrange alphabet
ex:
batman is bruce wayne -> aamntb is bceru aenwy -> is bceru aenwy aamntb
 */
function revamp(s) {
  var p1=s.split(/\s/).map(a=>a.split('').sort().join('')).sort((a,b)=>{
    var s_a=sumAscii(a);
    var s_b=sumAscii(b);
    if(s_a<s_b) return -1;
    else if(s_a>s_b) return 1;
    else {
      if(a.length<b.length) return -1;
      else if(a.length>b.length) return 1;
      else {
        if(a<b) return -1;
        else if(a>b) return 1;
        else return 0;
      }
    };
  });
  return p1.join(' ');
  function sumAscii(s) {
    return s.split('').reduce((ar,e,i)=>ar+s.codePointAt(i),0);
  }
}
function mjxRevamp(s) {
  const sort=s=>s.split("").sort().join(""),
    sum=s=>[...s].reduce((a,b)=>a+b.charCodeAt(),0)
  return s.split(" ").map(x=>sort(x)).sort((a,b)=>sum(a)-sum(b)||a.length-b.length||a.localeCompare(b)).join(" ")
}
console.log(revamp("batman is bruce wayne"));