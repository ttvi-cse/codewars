// s = "abcd\nefgh\nijkl\nmnop"

function vertMirror(strng) {
    return strng.split('\n').map(a => a.split('').reverse().join('')).join('\n');
}
function horMirror(strng) {
    return strng.split('\n').reverse().join('\n');
}
function oper(fct, s) {
    return fct(s);
}

var s = "abcd\nefgh\nijkl\nmnop";

console.log(oper(horMirror, s));