// turn the given integer into a number - has only one non-zero digit.
// each step take last non 0 digit
// if < 5 -> round to 0
// if >=5 round to 10 -> increase nexxt digit by 1
function rounders(value) {
    //coding and coding..
    value=value.toString().split('');
    var carry=0;
    for(var i=value.length-1;i>=0;i--) {
        value[i]= +value[i]+carry;
        if(+value[i]>=5) carry=1;
        else carry=0;
        if (i!=0) value[i]='0';
    }
    return parseInt(value.join(''));
}
console.log(rounders(10));