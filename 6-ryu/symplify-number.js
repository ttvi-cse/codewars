function simplify(number){
  var str=number.toString().split('');
  return str.map((a,i)=>{
    if(str[i]!='0') {
      if(i<str.length-1) {
        s=`${str[i]}*${'1'+'0'.repeat(str.length-i-1)}`
      } else {
        s=`${str[i]}}`
      }
    } else {
      s='';
    }
    return s;
  }).filter(a=>a!='').join('+');
}
console.log(simplify(10001));
console.log(4*10000)