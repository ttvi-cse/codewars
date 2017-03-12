/*
sol:
nth row: n,n+1,n+2,...,n*2-1,...,n+2,n+1,n
a=n
d=1
N=2n-2
-> sum = N/2(2a+(N-1)d)
       = (2n-2)/2(2n+(2n-2-1))
       = 2*(n-1)*(4n-3)+(2n-1)
 */
nthRowSum=n=>Math.pow(8*n,2);
console.log(nthRowSum(2));
console.log(nthRowSum(1));
console.log(nthRowSum(3));
console.log(nthRowSum(5));
console.log(nthRowSum(33));
console.log(nthRowSum(101));