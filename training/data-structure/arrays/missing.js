/**
 * Created by John on 2/14/2017.
 */

function getMissingNumber(arr) {
    var n = arr.length + 1;
    arr.sort(function(a,b) {return a > b});
    console.log(arr);
    for (var i = 1; i <= n; i++) {
        if (arr[i-1] != i) {
            return i;
        }
    }

    return 0;
}

function getMissingNumber2(arr) {
    var n = arr.length;
    var total = (n+1) * (n+2) /2;

    for (var i = 0 ; i < arr.length; i++) {
        total -= arr[i];
    }

    return total;
}

console.log(getMissingNumber2([1,2,4,6,3,7,8]));
