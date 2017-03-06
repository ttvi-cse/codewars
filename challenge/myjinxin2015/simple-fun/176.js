/**
 * Given a string str, reverse it omiiting all non-alphabetic characters
 * @param str
 */
function reverseLetter(str) {
    var arr=str.split('');
    var aux=[];
    var l,r;
    for(var i=0;i<arr.length;i++)
        if((arr[i]>='a'&&arr[i]<='z') ||(arr[i]>='A'&&arr[i]<='Z')) aux.push(arr[i]);
    l=0;
    r=aux.length-1;
    while(l<r) {
        var t=aux[l];
        aux[l]=aux[r];
        aux[r]=t;
        l++;
        r--;
    }
    return aux.join('');
}
var str='ultr53o?n';
console.log(reverseLetter(str));