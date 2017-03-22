function arrange(strng) {
  var arr=strng.split(' ');
  for(var i=0;i<arr.length;) {
    var j=i,l1,l2;
    while(j<arr.length-1) {
      l1=arr[j].length;
      l2=arr[j+1].length;
      if(j%2==0&&l1>l2) {
        var t=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=t;
      } else if(j%2!=0&&l1<l2) {
        var t=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=t;
        j++;
      }
      j++;
    }
    i+=j;
  }
  return arr.map((a,i)=>i%2!=0?a.toUpperCase():a.toLowerCase()).join(' ');
}

arrange("after be arrived two My so");