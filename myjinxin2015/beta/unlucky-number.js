
/**
 * fuction return number of unlucky number from 0 to n
 * lucky number not have digits 4 and 7 and is divisible by 13
 * @param n
 */
function unluckyNumber(n) {
    var count = 0
    var unluckys = [];
    for (var i=1;i<n;i++) {
        if (i%13==0&&!contain4(i)&&!contain7(i)) {
            unluckys.push(i);
            count++;
        }
    }
    return count;

}
function contain4(n) {
    return n.toString().includes('4');
}

function contain7(n) {
    return n.toString().includes('7');
}
function unluckyNumber2(n) {
    for(var r =0,x=0;x<=n;x+=13) if(no47(x))r++;
    return r;
    function no47(n){
        while(n>0){
            var t=n%10;
            if(t==4||t==7) return false;
            n=~~(n/10);
        }
        return true;
    }
}
console.log(unluckyNumber2(100));
console.log(unluckyNumber2(1000));
console.log(unluckyNumber2(100000));
