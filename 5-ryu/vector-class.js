var Vector = function (cps) {
  this.cps=cps;
};
Vector.prototype.add=function(b) {
  if(this.cps.length!=b.cps.length) throw new Error();
  return new Vector(this.cps.map((a,i)=>a+b.cps[i]));
}
Vector.prototype.subtract=function(b) {
  if(this.cps.length!=b.cps.length) throw new Error();
  return new Vector(this.cps.map((a,i)=>a-b.cps[i]));
}
Vector.prototype.dot=function(b) {
  if(this.cps.length!=b.cps.length) throw new Error();
  return this.cps.map((a,i)=>a*b.cps[i]).reduce((a,b)=>a+b);
}
Vector.prototype.norm=function() {
  return Math.sqrt(this.cps.map(a=>a*a).reduce((a,b)=>a+b));
}
Vector.prototype.equals=function(b) {
  return this.cps.every((a,i)=>a==b.cps[i]);
}
Vector.prototype.toString=function(){
  return `(${this.cps.join(',')})`;
}
var a = new Vector([1,2]);
var b = new Vector([3,4]);
// console.log(a.add(b).equals(new Vector([4,6])));
console.log(a.add(b).equals(new Vector([4,6])))
