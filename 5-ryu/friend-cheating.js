/*
sequence of numbers from 1 to n n> 0
choses two numbers a,b
a*b should eual to sum of all numbers in sequence excludng a,b
given n, show numbers he excluded from sequence
array sorted in a
ex:
- removNb(26) return [[15,21],[21,15]]
- 100 return []
-
sol:
get sum of sequence
for each element i in sequence:
    for j = i+1 in sequence:
        if(i*j==sum-(i-j):
            arr push [i,j]
    end for
end for
 */
function removeNb (n) {
    var sum=n*(n+1)/2;
    for(var i=1,arr=[];i<=n;i++) {
        for (var j = 1; j <= n; j++) {
            if (i * j == sum - i - j) {
                arr.push([i, j]);
            }
        }
    }
    return arr;
}
function g967RemoveNb(n) {
    var sum=n*(n+1)/2;
    var result=[];
    for(var a=1;a<n;a++) {
        if((sum-a)%(a+1)===0) {
            var b=(sum-a)/(a+1);
            if(b<n) result.push([a,b]);
        }
    }
    return result;
}
console.log(g967RemoveNb(26))