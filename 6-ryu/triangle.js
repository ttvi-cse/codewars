/**
 * Created by John on 2/8/2017.
 */

function isTriangleNumber(number) {
    //Your code here
    // i, i + 1, i + 2, i + 3, i+ 4
    var array2 = [];
    array2.push(0);

    for (var i = 1; i < 100; i++) {
        array2.push(array2[i-1] + i);
    }

    console.log(array2);

    return array2.indexOf(number) !== -1;
}

console.log(isTriangleNumber(5));
