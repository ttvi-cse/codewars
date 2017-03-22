/*
 Given u0 = 1, u1 = 2 and the relation
 6*u(n)*u(n+1)-5*u(n)*u(n+2)+u(n+1)*u(n+2) = 0 calculate
 un for any integer n >= 0
 */
function fcn (n) {
  var n1,n2;
  if(n==0) return 1;
  else if(n==1) return 2;
  else {
    n1=fcn(n-1);
    n2=fcn(n-2);
    return 6*n2*n1/(5*n2-n1);
  }
}
function fcn2(n) {
  var a=[];
  a[0]=1;a[1]=2;
  for(var i=2;i<=n;i++) {
    a[i]=6*a[i-2]*a[i-1]/(5*a[i-2]-a[i-1]);
  }
  return a[n];
}
for(var i=1;i<=17;i++) console.log(fcn2(i));