function modulo(a,b) {
  var mod=0;
  for(var i=0;i<b.length;i++) mod=(mod*10+ +b.charAt(i))%a;
  return mod;
}
function lastDigit(str1,str2) {
  if(str1=='0'&&str2=='0') return 1;
  if(str2=='0') return 1;
  if(str1=='0') return 0;
  var exp=(modulo(4,str2)==0)?4:modulo(4,str2);
  var res=Math.pow(+str1.slice(-1), exp);
  return res%10;
}