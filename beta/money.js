function money(num){
  var str=String(num).split('').reverse();
  var s='';
  var i=0;
  for(i=0;i<str.length-3;i+=3) {
    s+=str[i]+str[i+1]+str[i+2]+',';
  }
  while(i<str.length) {s+=str[i];i++;}
  return s.split('').reverse().join('');
}
console.log(money(12));
