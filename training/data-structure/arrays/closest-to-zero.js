function closest(arr) {
    // [1, 60, -10, 70, -80, 85]
    var close = [];
    for (var i = 0; i < arr.length; i++)
        close[i] = 100;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            var abs = Math.abs(arr[i] + arr[j]);
            if (abs < close[i])
                close[i] = abs;
        }
    }
    var lo = 0, hi = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[i] + arr[j]) == Math.min(...close)) {
                lo = i;
                hi = j;
                break;
            }
        }
    }

    return [arr[lo], arr[hi]];
}

function minAbsSumPair(arr) {
    var inv_count = 0;
    var l, r, min_sum, sum, min_l, min_r;

    if (arr.length < 2)
        return;

    min_l = 0;
    min_r = 1;
    min_sum = arr[0] + arr[1];

    for (l = 0; l < arr.length; l++) {
        for (r = l + 1; r < arr.length; r++) {
            sum = arr[l] + arr[r];
            if (Math.abs(min_sum) > Math.abs(sum)) {
                min_sum = sum;
                min_l = l;
                min_r = r;
            }
        }
    }

    return [arr[min_l], arr[min_r]];
}

/**
 * 1) Sort all the elements of the input array.
 * 2) Use two index variables l and r to traverse from left and right ends respectively. Initialize l as 0 and r as n-1.
 * 3) sum = a[l] + a[r]
 * 4) If sum is -ve, then l++
 * 5) If sum is +ve, then r–
 * 6) Keep track of abs min sum.
 * 7) Repeat steps 3, 4, 5 and 6 while l < r Implementation
 * @param arr
 */
function minAbsSumPair2(arr) {

}

console.log(minAbsSumPair([1, 60, -10, 70, -80, 85]));