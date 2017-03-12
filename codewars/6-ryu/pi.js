/**
 * Created by John on 2/8/2017.
 */
function iterPi(epsilon) {
    // your code

    // 1 - 1/3 + 1/5 - 1/7 + ..
    // -1^i * 1/(2i + 1),  i from 0 to n
    var ite = 0;
    var pi4 = 0;

    while (Math.abs(pi4 * 4 - Math.PI) > epsilon) {
        pi4 += Math.pow(-1, ite) * 1 / (2*ite + 1);
        ite++;
    }

    return [ite, parseFloat((pi4*4).toFixed(10))];
}

console.log(iterPi(0.1));

