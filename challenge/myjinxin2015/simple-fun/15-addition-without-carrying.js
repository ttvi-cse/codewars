function additionWithoutCarrying(a,b) {
    //coding and coding..
    a=a.toString().split('');
    b=b.toString().split('');
    console.log(a);
    console.log(b);
    var i=a.length-1,j=b.length-1;
    while(i>=0&&j>=0) {
        if(a.length>b.length){
            a[i]=(+a[i]+ +b[j])%10;
        } else {
            b[j]=(+a[i]+ +b[j])%10;
        }
        i--;
        j--;
    }
    return a.length>b.length?+a.join(''):+b.join('');
}
console.log(additionWithoutCarrying(999,999));