function gcd(a,b) {
  if(b==0) return a;
  else return gcd(b,a%b);
}
function lcm(a,b) {
  return a*b/gcd(a,b);
}
function minSpecialMult(arr){
  var err=[],ans;
  arr=arr.map(a=>isNaN(+a)?err.push(a):+a).filter(a=>a);
  if(err.length) {
    if(err.length>1) return `There are ${err.length} invalid entries: [${err.map(a=>`\'${a}\'`).join(', ')}]`;
    else return `There is ${err.length} invalid entry: ${err[0]}`;
  }
  ans=arr[0];
  for(var i=1;i<arr.length;i++) {
    ans=(ans*arr[i])/gcd(arr[i],ans);
  }
  return ans;
}
console.log(minSpecialMult([18, 22, 4, null, 'a', 'b', 6, 3]));