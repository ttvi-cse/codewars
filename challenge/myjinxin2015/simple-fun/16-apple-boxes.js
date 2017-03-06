/**
 * calculate the difference between the number of red appples
 * and the number of yellow apples
 * @param k
 */
function appleBoxes(k) {
    var yellows=0;
    var reds=0;
    for(var i=1;i<=k;i++) {
        if(i%2==0) reds+=Math.pow(i,2);
        else yellows+=Math.pow(i,2);
    }
    return reds-yellows;
}
console.log(appleBoxes(1));