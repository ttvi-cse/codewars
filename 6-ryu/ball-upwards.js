function maxBall(v0) {
  v0=v0*1000/3600;
  // h = -0.5*g*t*t + v0*t
  var t=-v0/(2*-0.5*9.81);
  t=t>=10?10:t;
  return (-0.5*9.81*t*t+v0*t);
}
function maxBall1(v0) {
  // h = -0.5*g*t*t + v0*t
  const g=9.81;
  v0=v0*1000/3600;
  for(var t=0;t<10;t++) console.log(-0.5*g*t*t + v0*t);
  return 0;
}
console.log(maxBall1(15));
// console.log(maxBall1(45));
// console.log(maxBall1(99));
// console.log(maxBall1(85));