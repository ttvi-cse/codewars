/**
 *
 * @param min1
 * @param min2_10
 * @param min11
 * @param s
 */
function phoneCall(min1, min2_10, min11, s) {
    //coding and coding..
    // first minute costs min1
    // 2-10 min2_10
    // >10 min11
    // duration of the longest call
    // s=min1*1+min2_10*9+min11*(t-10)
    //
    var t;
    if(s>0&&s<min1) t=0;
    else if(s>=min1&&s<=min1+min2_10*9) t=Math.floor((s-min1)/min2_10)+1
    else if(s>(min1+min2_10*9)) t=Math.floor((s-min1-min2_10*9)/min11)+10;
    return t;
}
console.log(phoneCall(3,1,2,20));
console.log(phoneCall(2,2,1,2));
console.log(phoneCall(10,1,2,22));
console.log(phoneCall(2,2,1,24));
console.log(phoneCall(1,2,1,6));
console.log(phoneCall(2,3,4,29));
console.log(phoneCall(8,2,5,7));


