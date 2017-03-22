/**
 * Created by John on 2/15/2017.
 */

function scale(strng, k, n) {
    // your code
    var res = [];
    strng.split('\n').map(a => a.split('').map(a => a.repeat(k)).join('')).forEach(a => {for(var i = 0; i < n; i++) res.push(a)})
    return res;
}


console.log(scale("abcd\nefgh\nijkl\nmnop", 2, 2));
