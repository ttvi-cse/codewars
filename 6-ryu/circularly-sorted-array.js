function isCircleSorted( arr ){
    var b=Number.MAX_VALUE;
    for(var i=0;i<arr.length-1;i++) if(arr[i]>arr[i+1]) {b=i;break;}
    if(b+1==arr.length-1&&arr[b+1]>arr[0]) return false;
    else if(b+1<arr.length) {
        for(var i=b+1;i<arr.length-1;i++) {
            if(arr[i]>arr[0]||arr[i]>arr[i+1]) {return false;}
        }
    }
    return true;
}
function mjxIsCircleSorted( arr ){
    var a=arr.slice().sort((x,y)=>x-y)+"", b=""+arr+","+arr;
    return b.indexOf(a)>-1;
}