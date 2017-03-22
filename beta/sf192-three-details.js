/*
ex:
3 -> 1
6 - 123456 - 123 456 - 135 - 123 - / 246 - 123 - 2
7 - 1234567 -> 1357 or 246 -> 1357 -> 1234->13 24, 246->  123 true
11 - 1234567891011-> 1357911 or 246810
sol:
if(n< 5 return 1
if(n%2)==0 return 2+threedetail(n/2)
else return threedetail(Math.floor(n/2)  + threedetail (Maht.floor(n/2+1)
else return 1+threedetail(n/2)
 */
function threeDetails(n) {
if(n<6) return 1;
else if(n%2==0) return 2*threeDetails(n/2);
else return threeDetails(Math.floor(n/2))+threeDetails(Math.floor(n/2)+1);
}
for(var i=1;i<10;i++) {
  console.log(i+'-'+threeDetails(i));
}