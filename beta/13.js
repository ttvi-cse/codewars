function magicalWell(a,b,n) {
    // a,b
    // a*b
    // both a and b inicrease by 1
    // 1<a,b<2000
    // 0<n<5
    var sum=0;
    while(n-->0) sum+=a++*b++;
    return sum;
}
console.log(magicalWell(1,2,2));
console.log(magicalWell(1,1,1));
console.log(magicalWell(6,5,3));
