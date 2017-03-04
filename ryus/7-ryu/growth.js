/**
 * Created by John on 2/15/2017.
 */

function nbYear(p0, percent, aug, p) {
    var n = 1;
    while (p0 * Math.pow(1 + percent/100, n) + aug*n < p) {
        console.log(p0 * Math.pow(1 + percent/100, n) + aug*n);
        n++;
    }
    return n;
}

console.log(nbYear(1500, 5, 100, 5000));
