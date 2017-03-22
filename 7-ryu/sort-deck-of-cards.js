function sortTwisted37(array) {
  var t_arr=array.map(a=>+foo(a.toString()));
  console.log(t_arr);
  console.log(t_arr.every(a=>typeof a === 'number'));
  t_arr.sort();
  console.log(t_arr.every(a=>typeof a === 'number'));
  console.log(t_arr);
  t_arr=t_arr.map(a=>+foo(a.toString()));
  console.log(t_arr);
  return t_arr;
}
function foo(s) {
  var str=s.split('');
  for(var i=0;i<str.length;i++) if(str[i]=='3') str[i]='7'; else if(str[i]=='7') str[i]='3';
  return str.join('');
}
sortTwisted37([ 74, 14, 59, 78, 56, 3, 12, 33, 72, -5, 56, 64, 42 ]);

var arr=[ 65, 2, 53, 14, 35, 4, -14, -13, 12, 39, 4];
arr.sort();
// console.log(arr);