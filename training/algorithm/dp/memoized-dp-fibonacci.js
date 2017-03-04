var memo = [];
/**
 * memo = [];
 * fib(n):
 * if n in memo: return memo[n]
 * if n < 2: f = 1
 * else: f = fib(n-1) + fib(n-2)
 * memo[n] = f
 * return f
 * note:
 * fib(k) only recurses the first time it's called vk
 * memoized calls cost o(1)
 * # nonmemoized calls is n:
 * [fib(1),fib(2),...,fib(n)]
 * non-recursives work per call= 0(1)
 * => time=0(n)
 * @param n
 * @returns {*}
 */
function fb(n) {
    if(memo[n]!==undefined) return memo[n]; //1
    if(n<2) f=1;                            //2
    else f=fb(n-1)+fb(n-1);                 //3
    memo[n]=f;                              //4
    return f;                               //5
}
/**
 * fb(3)
 * 1: memo[3]=undefined goto line 2
 * 2: 3<2 false
 * 3: f=fb(2)+fb(1); call fb(2)
 * 1: memo[2]=undefined
 * 2: 2<2 false
 * 3: f=fb(1)+fb(0) call fb(1)
 * 1: memo[1]=undefined
 * 2: 1<2 f=1
 * 4: memo[1]=1;
 * 5: return 1;
 * call fb(0)
 *
 * 1:
 * 2: f = 1;
 *
 *
 */
// console.log(fb(3));
/*
dp ~ recursion + memoization
memoize (remember)
re-use soltion (ex: recursive)
to subproblems that
help solve the problem
=> running time = #subproblems*time/subproblem(0(1))
=> n
don't count recursion
 */
/*
bottom-up algorithm
fib = []
for k in range(1,n+1):
    if k <= 2: f = 1
    else f = fib[k-1] + fib[k-2]
    fib[k] = f;
return fib[n]
 */
var fib = [];
function fb2(n) {
    for(var k=1;k<=n+1;k++) {
        if(k<=2) f=1;
        else f=fib[k-1]+fib[k-2];
        fib[k]=f;
    }
    return fib[n];
}
console.log(fb2(3));
/*
generally
- exactly same computation
- topological sort of subproblem dependency
DAG->f(n-2)->f(n-1)->f(n)
- can often save space
 */