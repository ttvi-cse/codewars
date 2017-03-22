function reverseParentheses(s) {
    while(/\(\w+\)/.test(s)) {
        s=s.replace(/\(\w+\)/,a=>reverse(a.slice(1,-1)));
    }
    return s;
}
function reverse(s) {
    if(s.length<2) return s;
    return s.slice(-1)+reverse(s.slice(0,-1));
}
var s1='a(bc)de';
var s2='a(bcdefghijkl(mno)p)q';
console.log(reverseParentheses(s2));

// console.log(reverse('abcd'));
// console.log(/\(\w+\)/.test(s));