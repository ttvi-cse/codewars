// array up to four non-neg, less than 256
// pack these integers into noe number M
// first elem occupies first 8 bits
// second occupies next 8 bits
// so on
function arrayPacking(a) {
    var packing='';
    for(var i=a.length-1;i>=0;i--) {
        var t=a[i].toString(2);
        packing+='0'.repeat(8-t.length)+t;
    }
    return parseInt(packing,2);
}
console.log(arrayPacking([23, 45, 39]));