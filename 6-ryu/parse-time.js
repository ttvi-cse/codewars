String.prototype.toSeconds=function(){
  if(!/\d\d:[0-5][0-9]:[0-5][0-9]/.test(this)) return null;
  var arr=this.split(':');
  return arr[0]*3600+arr[1]*60+arr[2];
}
console.log('99:59:59'.toSeconds());