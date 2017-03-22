//TODO-1:02AM-23/3/2017 fix bug-not maintain oder of zerso elements
function removeZeros(arr) {
  for(var i=0;i<arr.length;i++) {
    if(arr[i]!=null&&+arr[i]==0) {
      var c=i;
      for(var j=i;j<arr.length;j++) if(+arr[j]!=0) {c=j;break;}
      if(c!=i) {
        var t=arr[i];
        arr[i]=arr[c];
        arr[c]=t;
      }
    }
  }
  return arr;
}
