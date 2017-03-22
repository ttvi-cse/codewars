function flatten() {
  var res=[],a=[];
  for(var e in arguments) {
    a.push(arguments[e]);
  }
  return flat(res,a);
}
function flat(res,a){
  for(var i=0;i<a.length;i++) {
    if(a[i] instanceof Array) flat(res,a[i]);
    else res.push(a[i]);
  }
  return res;
}
console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]));