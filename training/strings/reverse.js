function isAlphabet(c) {
    return ((c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z'));
}

function reverse(s) {
    var str = s.split('');
    var tmp = [];
    for (var i = 0; i < str.length; i++) {
        if (isAlphabet(str[i])) {
            tmp[i] = str[i];
        }
    }
    console.log(`tmp: ${tmp}`);
    var l = 0, r = tmp.length - 1;
    while (l < r) {
        var t = tmp[l];
        tmp[l] = tmp[r];
        tmp[r] = t;
        l++;
        r--;
    }
    console.log(`reversed tmp: ${tmp}`);
    for (var i = 0; i < str.length; i++) {
        if (isAlphabet(str[i]))
            str[i] = tmp[i];
    }
    console.log(`str: ${str}`);
    return str.join('');
}
function reverse2(s) {
    var str = s.split('');
    var l = 0, r = str.length - 1;
    while (l < r) {
        if (!isAlphabet(str[l])) l++;
        else if (!isAlphabet(str[r])) r--;
        else {
            var t = str[l];
            str[l] = str[r];
            str[r] = t;
            l++;
            r--;
        }
    }
    return str.join('');
}
var s = 'a,b$c';
console.log(reverse2(s));