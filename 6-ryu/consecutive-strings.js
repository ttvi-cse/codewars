function longestConsec(strarr, k) {
  var arr=[];
  var max_index=0;
  for(var i=0;i<strarr.length;i++) {
    var s='';
    for(var j=i;j<i+k;j++) s+=strarr[j];
    arr.push(s);
  }
  console.log(arr);
  for(var i=0;i<arr.length;i++) if(arr[i].length>arr[max_index].length) max_index=i;
  return strarr.length>0&&k>0&&k<=strarr.length ? arr[max_index]:'';
}
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));