// n,l,r
// number of ways to represenent
// n=a+b, l<=a<=b<=r
// n=6, l=2, r=4
// 5<=n<=10^6
// 1<=l<=r<=10^6
function countSumOfTwoRepresentations(n, l, r) {
    var c=0;
    for(var i=l;i<=r;i++) {
        if(i<n) {
            for(var j=i;j<=r;j++) {
                if(i+j>n) break;
                else if(i+j<n);
                else c++;
            }
        }
    }
    return c;
}
function countSumOfTwoRepresentations2(n,l,r) {
    var c=0;
    var arr=[];
    for(var i=l;i<=r;i++) {
        // do something
        if(i+i==n) c++;
        if(arr[i]==n-i) c++;
        arr[n-i]=i;
    }
    return c;
}
console.log(countSumOfTwoRepresentations(6,2,4));
