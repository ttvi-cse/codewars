function add(num1, num2) {
  var a=num1.split('').reverse().map(a=>+a);
  var b=num2.split('').reverse().map(a=>+a);
  var c=[],t=0,r=0,i=0,j=0;
  while(i<a.length&&j<b.length) {
    t=a[i]+b[j]+r;
    r=t>=10?1:0;
    c.push(t%10);
    i++;j++;
  }
  while(i<a.length) {
    t=a[i]+r;
    r=t>=10?1:0;
    c.push(t%10);
    i++;
  }
  while(j<b.length) {
    t=b[j]+r;
    r=t>=10?1:0;
    c.push(t%10);
    j++;
  }
  return c.reverse().join(''); // Fix this!
}
var num1='123457';
var num2='123457666666666';
// console.log((Number(num1)+Number(num2)));
console.log(+add(num1,num2));
// console.log(+add(num1,num2)==(Number(num1)+Number(num2)));