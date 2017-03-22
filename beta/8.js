function killKthBit(n, k) {
    var b=toBinary(n);
    var arr=b.split('');if(k<arr.length) arr[k]='0';b=arr.join('');
    return toDecimal(b);
}
function toBinary(n) {
    var arr=[];
    while(n>0) {
        arr.push(n%2);
        n=Math.floor(n/2);
    }
    var l=0,r=arr.length-1;
    while(l<r) {
        var t=arr[l];
        arr[l]=arr[r];
        arr[r]=t;
        l++;
        r--;
    }
    return arr.join('');
}
function toDecimal(str) {
    var arr=str.split('');
    for(var i=arr.length-1,n=0,k=0;i>=0;i--)
        n+= +arr[i]*Math.pow(2,k++);
    return n;
}
console.log(killKthBit(123840213,29));