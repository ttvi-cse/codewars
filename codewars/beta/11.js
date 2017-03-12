/**
 * swap adjacent bits of 32-bit number
 * @param n
 */
function swapAdjacentBits(n) {
    var b=toBinary(n);
    var arr=b.split('');
    arr=shiftAray(arr);
    for(var i=0;i<arr.length-1;i+=2) {
        var t=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=t;
    }
    b=arr.join('');
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
function shiftAray(arr) {
    // insert 8-arr.length element at first position
    var aux=[];
    for(var i=0;i<32;i++) aux[i]='0';
    var i=aux.length-1;
    var j=arr.length-1;
    while(i>=0&&j>=0){
        aux[i--]=arr[j--];
    }
    return aux;
}
function ooflorentSwapAdjacentBits(n) {
    return (n&0xAAAAAAAA)>>1|(n&0x55555555)<<1;
}
function mjxSwapAdjacentBits(n) {
    return parseInt(
        ('0'+n.toString(2))
            .slice(-Math.ceil(n.toString(2).length/2)*2)
            .replace(/(.)(.)/g,"$2$1")
        ,2);
}
console.log(ooflorentSwapAdjacentBits(13));
console.log(ooflorentSwapAdjacentBits(74));
console.log(ooflorentSwapAdjacentBits(1073741823));
console.log(ooflorentSwapAdjacentBits(0));
console.log(ooflorentSwapAdjacentBits(1));
console.log(ooflorentSwapAdjacentBits(83748));

