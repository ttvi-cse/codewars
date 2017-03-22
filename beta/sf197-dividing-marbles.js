/*
collection of marbles
split equal
value one to sex
one 1 one 3 and two 4
return true or false
ex:
[1,1,0,1,1,1]-> 1+2+4+5+6=18
[1, 0, 1, 2, 0, 0]
[1,1,1,1,1,3]-> 2x6,1x4|1x6,1x5,1x1,1x3,1x2 -> false
 sol:
 while(array is not empty) {
  remove max of array
  remove all element have equal value of max
 }
 if all element are even return true
 else if(totoal value of odd element are even) return true
 else return false;
 [1,1,1,0,2,0]
 */

function dividingMarbles(marbles){
  var s=marbles.every(a=>a%2==0);
  if(s) return true;
  var odd_sum=marbles.reduce((a,e,i)=>{
    if(e%2!=0) a+=e*(i+1);
    return a;
  },0);
  if(odd_sum%2==0) return true;
  return false;
}
console.log(dividingMarbles([1, 1, 1, 2, 0, 0]));