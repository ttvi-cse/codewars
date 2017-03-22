//TODO-21/3/2016 fix me
var histogram = function(results) {
  const spaces='-', new_line='\n';
  var mat=[];
  var s='',num=0,count_space=0;
  for(var i=0,max=0;i<results.length;i++) if(results[i]>max) max=results[i];
  for(var i=results.length-1;i>=0;i--) {
    s='';
    s+=(i+1)+spaces+(results[i]>0?'#'.repeat(results[i])+' '+results[i]:'');
    count_space=max+3-1-s.length>0?max+3-1-s.length:0;
    s+=(' '.repeat(count_space)+new_line);
    mat.push(s.split(''));
  }
  return foo(bar(mat));
}
function bar(mat) {
  var res=[];
  for(var i=0;i<mat[0].length;i++) {
    var t_arr=[];
    for(var j=0;j<mat.length;j++) {
      t_arr.push(mat[j][i])
    }
    res.push(t_arr);
  }
  return res;
}
function foo(mat){
  var s='';
  for(var i=0;i<mat.length;i++) {
    s+=mat[i].join(',')+'\n';
  }
  console.log(s);
}
console.log(histogram([7,3,10,1,0,5]))