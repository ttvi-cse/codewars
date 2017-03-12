function binStr(s) {
    var c=0;
    var i=s.indexOf('1');
    while(!/^0+$/.test(s)) {
        s=flip(s,i);
        i=s.indexOf('1');
        c++;
    }
    return c;
}
function flip(s,n) {
    var str=s.split('');
    for(var i=n;i<str.length;i++) {
        if (str[i] == '1') str[i] = '0';
        else if(str[i]=='0') str[i] = '1';
    }
    return str.join('');
}
function mjBinStr(s) {
    return (s.split(/1+0+/).length-1)*2+(/1$/.test(s));
}
console.log(binStr('1010101011111111111111000000000'));