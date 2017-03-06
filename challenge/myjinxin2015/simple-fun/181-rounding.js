// a,b a*m<=n<=b*m
//TODO: bug
function rounding(n, m) {
    //coding and coding..
    var r=0;
    if(m<n) {
        var f=Math.floor(n/m)*m;
        var c=Math.ceil(n/m)*m;
        r=Math.abs(n-f)<=Math.abs(n-c)?f:c;
    } else {
        if(n*2==n) r=n;
    }
    return r;
}
console.log(rounding(20,3));
console.log(rounding(19,3));
console.log(rounding(1,10));
console.log(rounding(50,100));
console.log(rounding(123,456));
console.log(rounding(326,4));
console.log(rounding(644,8));
